import { Embedly } from '@/extensions/embedly';
import { prisma } from '@/prisma/client';
import { ExternalTransferInput, TransferPayload } from '@/types/types';
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

  if (!idempotencyKey) throw new CustomError('Missing idempotency key', 400);
  if (amount <= 0) throw new CustomError('Invalid amount', 400);

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
  const fromWallet = await prisma.wallet.findFirst({
    where: { userId: initiatorUserId },
  });
  if (!fromWallet) throw new CustomError('Wallet not found', 404);

  if (Number(fromWallet.availableBalance) < amount)
    throw new CustomError('Insufficient balance', 422);

  try {
    const result = await Embedly.banks.transfer({
      amount,
      currency,
      destinationBank,
      destinationAccountNumber,
      destinationAccountName,
      sourceAccountNumber: fromWallet.accountNumber?.trim(),
      sourceAccountName: senderName.trim() ?? 'Wepay User',
      remarks: reason,
    });

    if (!result.succeeded) throw new CustomError('Transfer not succeeded', 500);

    const transferRecord = await prisma.$transaction(async (tx) => {
      // 3.1 Create pending transfer
      const transfer = await tx.transfer.create({
        data: {
          idempotencyKey,
          fromWalletId: fromWallet.id,
          toWalletId: fromWallet.id, // temporary, not external wallet
          amount: BigInt(amount),
          currency,
          initiatedBy: initiatorUserId,
          reason,
          status: 'PENDING',
          // transactionReference: result.data,
          shouldRefund: true,
          type: 'EXTERNAL',
        },
      });

      // 3.2 Debit user wallet
      const newBalance = BigInt(fromWallet.availableBalance) - BigInt(amount);
      await tx.wallet.update({
        where: { id: fromWallet.id },
        data: {
          availableBalance: Number(newBalance),
        },
      });

      // 3.3 Create ledger entry (DEBIT)
      await tx.ledger.create({
        data: {
          walletId: fromWallet.id,
          transferId: transfer.id,
          change: BigInt(-amount),
          balanceAfter: newBalance,
          type: 'TRANSFER_DEBIT',
          metadata: {
            reason,
            toBankCode: destinationBank,
            toAccount: destinationAccountNumber,
          },
        },
      });

      // 3.4 Create outbox for async publish
      await tx.outboxEvent.create({
        data: {
          topic: 'transfer.external.initiated',
          payload: {
            transferId: transfer.id,
            userId: initiatorUserId,
            amount,
            currency,
            toBankCode: destinationBank,
            toAccountNumber: destinationAccountNumber,
            toAccountName: destinationAccountName,
          },
        },
      });

      return transfer;
    });

    if (!transferRecord) throw new CustomError('Transfer failed', 500);

    return transferRecord;
  } catch (err) {
    await prisma.transfer.create({
      data: {
        status: 'FAILED',
        idempotencyKey,
        fromWalletId: fromWallet.id,
        toWalletId: fromWallet.id, // temporary, not external wallet
        amount: BigInt(amount),
        currency,
        initiatedBy: initiatorUserId,
        reason,
      },
    });

    throw new CustomError('External transfer failed', 500);
  }
}

export async function walletToWalletTransfer(payload: TransferPayload) {
  const {
    idempotencyKey,
    initiatorUserId,
    fromPhone,
    toPhone,
    amount,
    currency = 'NGN',
    reason,
  } = payload;

  const amt = BigInt(amount);
  if (amt <= 0n) throw new Error('Amount must be positive');

  // Resolve sender and recipient
  const fromUser = await prisma.user.findUnique({
    where: { phone: fromPhone },
  });
  if (!fromUser) throw new Error('Sender not found');

  const toUser = await prisma.user.findUnique({ where: { phone: toPhone } });
  if (!toUser) throw new Error('Recipient not found');

  if (fromUser.id === toUser.id) throw new Error('Cannot transfer to self');

  const fromWallet = await prisma.wallet.findFirst({
    where: { userId: fromUser.id },
  });
  const toWallet = await prisma.wallet.findFirst({
    where: { userId: toUser.id },
  });

  if (!fromWallet || !toWallet) throw new Error('Wallets not found');

  // canonical order to avoid deadlocks
  const ordered = [fromWallet.id, toWallet.id].sort();

  return prisma.$transaction(async (tx) => {
    // idempotency guard
    if (idempotencyKey) {
      const existing = await tx.transfer.findUnique({
        where: { idempotencyKey },
      });
      if (existing) {
        // return existing transfer or throw if mismatch
        return existing;
      }
    }

    // lock wallets with FOR UPDATE
    // parameterize carefully
    const lockedRows = await tx.$queryRawUnsafe(
      `SELECT * FROM "Wallet" WHERE id IN ($1, $2) FOR UPDATE`,
      ordered[0],
      ordered[1],
    );

    // map locked rows
    const lockedMap = new Map((lockedRows as any[]).map((r) => [r.id, r]));

    const lockedFrom = lockedMap.get(fromWallet.id);
    const lockedTo = lockedMap.get(toWallet.id);

    if (!lockedFrom || !lockedTo) {
      throw new Error('Failed to lock wallets');
    }

    // check funds
    const available = BigInt(lockedFrom.availableBalance as any);
    const reserved = BigInt((lockedFrom.reservedBalance as any) || 0);
    if (available - reserved < amt) throw new Error('Insufficient funds');

    // create Transfer record
    const transfer = await tx.transfer.create({
      data: {
        idempotencyKey,
        fromWalletId: fromWallet.id,
        toWalletId: toWallet.id,
        amount: amt.toString(),
        currency,
        initiatedBy: initiatorUserId,
        reason,
        status: 'PENDING',
      } as any,
    });

    // create JournalEntry
    const journal = await tx.journalEntry.create({
      data: {
        reference: transfer.id,
        transferId: transfer.id,
        description: reason ?? 'internal transfer',
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
        change: (-amt).toString(),
        balanceAfter: newFromLedgerBal,
        type: 'TRANSFER_DEBIT',
        metadata: { reason },
      } as any,
    });

    const credit = await tx.ledger.create({
      data: {
        walletId: toWallet.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: amt.toString(),
        balanceAfter: newToLedgerBal,
        type: 'TRANSFER_CREDIT',
        metadata: { reason },
      } as any,
    });

    // update wallets balances
    await tx.wallet.update({
      where: { id: fromWallet.id },
      data: {
        ledgerBalance: newFromLedgerBal,
        availableBalance: newFromAvailable,
        version: { increment: 1 },
      } as any,
    });

    await tx.wallet.update({
      where: { id: toWallet.id },
      data: {
        ledgerBalance: newToLedgerBal,
        availableBalance: newToAvailable,
        version: { increment: 1 },
      } as any,
    });

    // mark transfer completed
    await tx.transfer.update({
      where: { id: transfer.id },
      data: { status: 'COMPLETED' as any },
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
          amount: amt.toString(),
          currency,
        },
      },
    });

    // return structured result
    return {
      transferId: transfer.id,
      journalId: journal.id,
      debitLedgerId: debit.id,
      creditLedgerId: credit.id,
      status: 'COMPLETED',
    };
  });
}

export async function createWallet(payload: any) {
  const { bankName, bankCode, accountNumber, initiatorUserId } = payload;

  const wallet = await prisma.wallet.create({
    data: {
      accountNumber,
      availableBalance: 20,
      bankCode,
      bankName,
      walletId: '1234567810',
      userId: initiatorUserId,
      reservedBalance: 0,
    },
  });

  return wallet;
}
