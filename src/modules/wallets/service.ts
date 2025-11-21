import { Embedly } from '@/extensions/embedly';
import { Queue } from '@/jobs/queues';
import { prisma } from '@/prisma/client';
import { ExternalTransferInput, iWallet, TransferPayload } from '@/types/types';
import {
  amountInKobo,
  amountInNaira,
  checkDailyLimit,
  formatCurrency,
  formatDate,
} from '@/utils';
import CustomError from '@/utils/customError';

export async function transferToExternalBank(payload: ExternalTransferInput) {
  const {
    idempotencyKey,
    initiatorUserId,
    senderName,
    destinationBank,
    destinationAccountNumber,
    destinationAccountName,
    amount,
    currency = 'NGN',
    reason = 'Funds Transfer',
  } = payload;

  const amt = amountInKobo(amount);
  if (!idempotencyKey) throw new CustomError('Missing idempotency key', 400);
  if (amt <= 0n) throw new CustomError('Invalid amount', 400);

  // ------------------------------
  // 1️⃣ Check Idempotency Record
  // ------------------------------
  const existingTransfer = await prisma.transfer.findUnique({
    where: { idempotencyKey },
  });
  if (existingTransfer) return existingTransfer;

  // ------------------------------
  // 2️⃣ Resolve Wallet & Balance
  // ------------------------------
  const [fromWallet, fromUser] = await Promise.all([
    prisma.wallet.findFirst({
      where: { userId: initiatorUserId, currency },
    }),
    prisma.user.findFirst({ where: { id: initiatorUserId } }),
  ]);

  if (!fromUser) throw new CustomError('User not found', 404);
  if (!fromWallet) throw new CustomError('Wallet not found', 404);

  const feeRate = Number(process.env?.EXTERNAL_PERCENT ?? 15);
  const totalAmount = amountInKobo(amount + feeRate);

  if (Number(fromWallet.availableBalance) < totalAmount)
    throw new CustomError('Insufficient balance', 422);

  // Check for daily limit
  const limitExceeded = await checkDailyLimit(fromWallet, fromUser, amt);
  if (limitExceeded) throw new CustomError(`Daily limit exceeded.`, 403);

  const transferRecord = await prisma.$transaction(async (tx) => {
    const provider = await tx.provider.upsert({
      where: { provider: 'EMBEDLY' },
      update: {},
      create: {
        provider: 'EMBEDLY',
      },
    });

    const transfer = await tx.transfer.create({
      data: {
        idempotencyKey,
        fromWalletId: fromWallet.id,
        amount: amt,
        currency,
        initiatedBy: initiatorUserId,
        reason,
        status: 'PENDING',
        shouldRefund: true,
        type: 'EXTERNAL',
        metadata: {
          providerId: provider.id,
        },
      },
    });

    // Create a transaction
    await tx.transaction.create({
      data: {
        amount: -amt.toString(),
        itemId: transfer.id,
        type: 'TRANSFER',
        status: 'PENDING',
        userId: initiatorUserId,
        metadata: {
          type: 'debit',
          currency: 'NGN',
          walletId: fromWallet.id,
          providerId: provider.id,
          recipient: `${destinationAccountName}-${destinationAccountNumber}`,
        },
      },
    });

    // create outbox event
    await tx.outboxEvent.create({
      data: {
        aggregateId: transfer.id,
        topic: 'transfer.external.initiated',
        payload: {
          transferId: transfer.id,
          fromWalletId: fromWallet.id,
          destinationBank,
          destinationAccountNumber,
          destinationAccountName,
          sourceAccountNumber: fromWallet.accountNumber?.trim(),
          sourceAccountName: senderName.trim(),
          remarks: reason,
          amount: amount,
          currency,
          providerId: provider.id,
          initiatedBy: initiatorUserId,
          timestamp: new Date().toISOString(),
        },
      },
    });

    return transfer;
  });

  await Queue.trigger(transferRecord.id, 'TRANSFER');

  return {
    ...transferRecord,
    amount: amountInNaira(transferRecord.amount),
  };
}

export async function walletToWalletTransfer(payload: TransferPayload) {
  const {
    idempotencyKey,
    initiatorUserId,
    sender,
    receiver,
    amount,
    currency = 'NGN',
    reason,
  } = payload;

  // TODO:: Check for user wallet amount before transfering

  const amt = amountInKobo(amount);
  if (amt <= 0n) throw new Error('Amount must be positive');

  // Resolve sender and recipient
  const [fromWallet, toWallet] = await Promise.all([
    prisma.wallet.findFirst({
      where: { accountNumber: sender, currency },
      include: { user: true },
    }),
    prisma.wallet.findFirst({
      where: { accountNumber: receiver, currency },
      include: { user: true },
    }),
  ]);

  if (!fromWallet)
    throw new CustomError(
      `Sender wallet not found for currency ${currency}`,
      404,
    );
  if (!toWallet)
    throw new CustomError(
      `Recipient wallet not found for currency ${currency}`,
      404,
    );

  if (fromWallet.status !== 'ACTIVE')
    throw new CustomError(
      'Sender wallet is not active. Please follow our instructions to activate your wallet',
      403,
    );
  if (toWallet.status !== 'ACTIVE')
    throw new CustomError(
      'Recipient wallet is not active. Please follow our instructions to activate your wallet',
      403,
    );

  const fromUser = fromWallet.user;
  const toUser = toWallet.user;

  // Checks
  if (!toUser) throw new CustomError('Recipient not found', 404);
  if (!fromUser) throw new CustomError('Sender not found', 404);
  if (fromUser.status !== 'ACTIVE')
    throw new CustomError(
      'Sender account is not active. Please follow our instructions to activate your account',
      403,
    );
  if (toUser.status !== 'ACTIVE')
    throw new CustomError(
      'Recipient account is not active. Please follow our instructions to activate your wallet',
      403,
    );
  if (fromUser.id === toUser.id)
    throw new CustomError('Cannot transfer to self', 422);

  // canonical order to avoid deadlocks
  const ordered = [fromWallet.id, toWallet.id].sort();

  const transfer = await prisma.$transaction(async (tx) => {
    // idempotency guard

    const existing = await tx.transfer.findUnique({
      where: { idempotencyKey },
    });
    if (existing) return existing; // log here

    // lock wallets with FOR UPDATE
    const lockedRows = await tx.$queryRaw<
      any[]
    >`SELECT id, "userId", currency, "ledgerBalance", "availableBalance", "reservedBalance", version, status FROM "Wallet" WHERE id IN (${ordered[0]}, ${ordered[1]}) FOR UPDATE`;
    if (lockedRows.length !== 2)
      throw new CustomError('Failed to lock wallets', 500);

    // map locked rows
    const lockedMap = new Map((lockedRows as any[]).map((r) => [r.id, r]));
    const lockedFrom = lockedMap.get(fromWallet.id);
    const lockedTo = lockedMap.get(toWallet.id);

    if (!lockedFrom || !lockedTo)
      throw new CustomError('Failed to lock wallets', 422);

    // check funds
    const available = BigInt(lockedFrom.availableBalance as any);
    // const reserved = BigInt((lockedFrom.reservedBalance as any) || 0);
    if (available < amt) throw new CustomError('Insufficient funds', 403);

    // Check for daily limit
    const limitExceeded = await checkDailyLimit(fromWallet, fromUser, amt);
    if (limitExceeded) throw new CustomError(`Daily limit exceeded.`, 403);

    // create Transfer record
    const operationId = `transfer_${payload.idempotencyKey}`;
    const transfer = await tx.transfer.create({
      data: {
        idempotencyKey,
        fromWalletId: fromWallet.id,
        toWalletId: toWallet.id,
        amount: amt,
        currency,
        initiatedBy: initiatorUserId,
        reason,
        status: 'PENDING',
        metadata: {
          operationId,
          timestamp: new Date().toISOString(),
        },
      },
    });

    // create outbox event
    await tx.outboxEvent.create({
      data: {
        aggregateId: transfer.id,
        topic: 'transfer.internal.initiated',
        payload: {
          transferId: transfer.id,
          fromWalletId: fromWallet.id,
          toWalletId: toWallet.id,
          amount: amountInNaira(amt),
          fromUserId: fromUser.id,
          toUserId: toUser.id,
          currency,
          initiatedBy: initiatorUserId,
          timestamp: new Date().toISOString(),
        },
      },
    });

    // create JournalEntry
    const journal = await tx.journalEntry.create({
      data: {
        reference: transfer.id,
        transferId: transfer.id,
        description: reason ?? 'internal transfer',
        metadata: {
          operationId,
          fromWalletId: fromWallet.id,
          toWalletId: toWallet.id,
        },
      },
    });

    // compute new balances
    const newFromLedgerBal = BigInt(lockedFrom.ledgerBalance as any) - amt;
    const newFromAvailable = BigInt(lockedFrom.availableBalance as any) - amt;

    const newToLedgerBal = BigInt(lockedTo.ledgerBalance as any) + amt;
    const newToAvailable = BigInt(lockedTo.availableBalance as any) + amt;

    // create ledger rows (debit then credit), reference journal.id
    const debit = await tx.ledger.create({
      data: {
        walletId: fromWallet.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: -amt,
        balanceAfter: newFromLedgerBal,
        type: 'TRANSFER_DEBIT',
        metadata: {
          reason,
          operationId,
          recipientWalletId: toWallet.id,
        },
      },
    });

    const credit = await tx.ledger.create({
      data: {
        walletId: toWallet.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: amt,
        balanceAfter: newToLedgerBal,
        type: 'TRANSFER_CREDIT',
        metadata: {
          reason,
          operationId,
          senderWalletId: fromWallet.id,
        },
      },
    });

    // Update sender wallet
    await tx.wallet.update({
      where: { id: fromWallet.id },
      data: {
        ledgerBalance: newFromLedgerBal,
        availableBalance: newFromAvailable,
        version: { increment: 1 },
      },
    });

    // Update recipient wallet
    await tx.wallet.update({
      where: { id: toWallet.id },
      data: {
        ledgerBalance: newToLedgerBal,
        availableBalance: newToAvailable,
        version: { increment: 1 },
      },
    });

    // mark transfer completed
    await tx.transfer.update({
      where: { id: transfer.id },
      data: { status: 'COMPLETED' as any, completedAt: new Date() },
    });

    // create outbox event
    await tx.outboxEvent.create({
      data: {
        aggregateId: transfer.id,
        topic: 'transfer.completed',
        payload: {
          transferId: transfer.id,
          fromWalletId: fromWallet.id,
          toWalletId: toWallet.id,
          amount: amountInNaira(amt),
          currency,
          fromUserId: fromUser.id,
          toUserId: toUser.id,
          journalId: journal.id,
          debitLedgerId: debit.id,
          creditLedgerId: credit.id,
          completedAt: new Date().toISOString(),
        },
      },
    });

    // Create a transaction
    await tx.transaction.create({
      data: {
        amount: -amount.toString(),
        itemId: transfer.id,
        type: 'TRANSFER',
        status: 'COMPLETED',
        userId: initiatorUserId,
        metadata: {
          type: 'debit',
          currency: 'NGN',
          operationId,
          walletId: fromWallet.id,
          toWalletId: toWallet.id,
          recipient: toUser.name,
        },
      },
    });

    // Create a transaction
    await tx.transaction.create({
      data: {
        amount: amount,
        itemId: transfer.id,
        type: 'TRANSFER',
        status: 'COMPLETED',
        userId: toUser.id,
        metadata: {
          type: 'credit',
          currency: 'NGN',
          operationId,
          walletId: fromWallet.id,
          toWalletId: toWallet.id,
          recipient: toUser.name,
        },
      },
    });

    // TODO: This not working
    await Queue.trigger(transfer.id, 'NOTIFICATION', {
      country: fromUser?.country ?? 'NG',
      message: `
      Acct: ******${fromWallet.accountNumber.slice(-4)}
      Amt: ${currency}${formatCurrency(amountInNaira(amt))} DR
      Desc: ${reason?.toUpperCase()}
      Avail Bal: ${currency}${formatCurrency(amountInNaira(newFromAvailable))}
      Date: ${formatDate(new Date())}`,
      phone: fromUser?.phone!,
      type: 'SMS',
    });

    // return structured result
    return {
      transfer: {
        ...transfer,
        amount: amountInNaira(amt),
      },
      journalId: journal.id,
      debitLedgerId: debit.id,
      creditLedgerId: credit.id,
      status: 'COMPLETED',
      id: transfer.id,
    };
  });

  const newToAvailable = BigInt(toWallet.availableBalance as any) + amt;
  await Queue.trigger(transfer.id, 'NOTIFICATION', {
    country: toUser?.country ?? 'NG',
    message: `
      Acct: ******${toWallet.accountNumber.slice(-4)}
      Amt: ${currency}${formatCurrency(amountInNaira(amt))} CR
      Desc: ${reason?.toUpperCase()}
      Avail Bal: ${currency}${formatCurrency(amountInNaira(newToAvailable))}
      Date: ${formatDate(new Date())}`,
    phone: toUser?.phone!,
    type: 'SMS',
  });

  return transfer;
}

export async function createWallet(payload: iWallet) {
  const result = await Embedly.wallets.create(payload);
  if (!result) throw new CustomError('Wallet not creted on embedly', 500);

  // Create user wallet
  const userWallet = await prisma.wallet.create({
    data: {
      accountNumber: result.virtualAccount.accountNumber,
      bankCode: result.virtualAccount.bankCode,
      bankName: result.virtualAccount.bankName,
      walletId: result?.id,
      availableBalance: 0,
      ledgerBalance: 0,
      userId: payload.userId,
    },
  });

  return userWallet;
}
