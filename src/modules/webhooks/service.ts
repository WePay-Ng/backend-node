import { environment } from '@/config/env';
import { Queue } from '@/jobs/queues';
import { prisma } from '@/prisma/client';
import {
  amountInKobo,
  amountInNaira,
  formatCurrency,
  formatDate,
} from '@/utils';
import CustomError from '@/utils/customError';

export async function payout(payload: any) {
  try {
    if (payload?.status !== 'Success')
      throw new CustomError('Error from Embedly', 500);

    const transfer = await prisma.transfer.findFirst({
      where: { transactionReference: payload.paymentReference },
    });

    if (!transfer) throw new CustomError('Transfer not found', 404);

    const metadata = transfer.metadata as { provideId?: string };

    const transferRecord = await prisma.$transaction(async (tx) => {
      const wallet = await tx.wallet.findFirst({
        where: { accountNumber: payload?.debitAccountNumber },
        include: { user: true },
      });

      const updatedTransfer = await tx.transfer.update({
        where: { id: transfer?.id },
        data: {
          status: 'COMPLETED',
          toWalletId: metadata?.provideId,
          shouldRefund: false,
        },
      });

      const newAmountInKobo = amountInKobo(payload.amount); //Converted to Kobo

      const newToLedgerBal =
        BigInt(wallet?.ledgerBalance as any) - newAmountInKobo;

      // TODO: Create a Journal Entry and Ledger debit for the momey leaving

      const journal = await tx.journalEntry.create({
        data: {
          reference: payload.paymentReference,
          transferId: transfer.id,
          description: payload.description,
          postedAt: new Date().toISOString(),
          metadata: {
            fromWalletId: wallet?.id,
            toProvider: 'EMBEDLY',
          },
        },
      });

      // Create Debit Ledger
      await tx.ledger.create({
        data: {
          walletId: wallet?.id,
          journalId: journal.id,
          transferId: transfer.id,
          change: -newAmountInKobo,
          balanceAfter: newToLedgerBal,
          type: 'TRANSFER_DEBIT',
          metadata: {
            reason: payload.deliveryStatusMessage,
            fromWalletId: wallet?.id,
            toProvider: 'EMBEDLY',
          },
        },
      });

      const updatedWallet = await tx.wallet.update({
        where: { id: wallet?.id },
        data: {
          ledgerBalance: newToLedgerBal,
        },
        include: { user: true },
      });

      await tx.transaction.update({
        where: { itemId: transfer.id },
        data: {
          status: 'COMPLETED',
        },
      });

      // TODO:: NOTIFY USER
      await Queue.trigger(transfer?.id, 'NOTIFICATION', {
        country: wallet?.user?.country ?? 'NG',
        message: `
        Acct: ******${updatedWallet.accountNumber.slice(-4)}
        Amt: ${transfer.currency}${formatCurrency(payload.amount)} DR
        Desc: TRANSFER TO ${payload?.creditAccountName?.toUpperCase()} ${payload?.deliveryStatusMessage?.toUpperCase()}
        Avail Bal: ${transfer.currency}${formatCurrency(amountInNaira(updatedWallet.availableBalance))}
        Date: ${formatDate(new Date())}`,
        phone: wallet?.user?.phone!,
        type: 'SMS',
      });

      // FEE Here
      const feeRate = amountInKobo(process.env?.EXTERNAL_PERCENT ?? 15);
      const newBalAfterFee = BigInt(updatedWallet?.availableBalance) - feeRate;
      const newLedgeBalAfterFee =
        BigInt(updatedWallet?.ledgerBalance) - feeRate;

      await tx.wallet.update({
        where: { id: wallet?.id },
        data: {
          ledgerBalance: newLedgeBalAfterFee,
        },
      });

      const fee = await tx.fee.update({
        where: { transactionId: transfer.id },
        data: {
          status: 'COMPLETED',
        },
      });

      await tx.transaction.update({
        where: { itemId: fee.id },
        data: {
          status: 'COMPLETED',
          metadata: {
            completedAt: new Date().toISOString(),
          },
        },
      });

      await tx.outboxEvent.create({
        data: {
          aggregateId: transfer?.id,
          topic: 'transfer.external.embedly.completed',
          payload: {
            transferId: transfer?.id,
            ...payload,
          },
        },
      });

      await Queue.trigger(transfer?.id, 'NOTIFICATION', {
        country: wallet?.user?.country ?? 'NG',
        message: `
        Acct: ******${updatedWallet.accountNumber.slice(-4)}
        Amt: ${transfer.currency}${formatCurrency(amountInNaira(feeRate))} DR
        Desc: Commission on NIP Transfer
        Avail Bal: ${transfer.currency}${formatCurrency(amountInNaira(newBalAfterFee))}
        Date: ${formatDate(new Date())}`,
        phone: wallet?.user?.phone!,
        type: 'SMS',
      });

      return updatedTransfer;
    });

    return transferRecord;
  } catch (error) {
    const message = error?.message;

    // Write Reverse logic
    if (message.includes('Error from Embedly')) {
      const newAmountInKobo = amountInKobo(payload.amount);
      const newFeeInKobo = amountInKobo(process.env.EXTERNAL_PERCENT ?? 15);

      const trx = await prisma.$transaction(async (tx) => {
        const transfer = await tx.transfer.findFirst({
          where: { transactionReference: payload.paymentReference },
        });
        const wallet = await tx.wallet.update({
          where: { accountNumber: payload?.debitAccountNumber },
          data: {
            availableBalance: { increment: newAmountInKobo + newFeeInKobo },
            ledgerBalance: { increment: newAmountInKobo + newFeeInKobo },
          },
          include: { user: true },
        });

        await tx.transfer.update({
          where: { id: transfer?.id },
          data: { status: 'REVERSED' },
        });

        await tx.transaction.update({
          where: { itemId: transfer?.id },
          data: {
            status: 'REVERSED',
          },
        });

        await tx.outboxEvent.create({
          data: {
            aggregateId: transfer?.id,
            topic: 'transfer.external.embedly.reversed',
            payload: {
              transferId: transfer?.id,
              error: payload.message,
              ...payload,
            },
          },
        });

        return {
          transfer,
          wallet,
        };
      });

      // Notify user of reversal
      await Queue.trigger(trx.transfer?.id!, 'NOTIFICATION', {
        country: trx.wallet?.user?.country ?? 'NG',
        message: `
        Acct: ******${trx.wallet.accountNumber.slice(-4)}
        Amt: ${trx.transfer?.currency}${formatCurrency(payload.amount)} CR
        Desc: REVERSED: ${payload?.creditAccountName?.toUpperCase()} ${payload?.description?.toUpperCase()}
        Avail Bal: ${trx.transfer?.currency}${formatCurrency(amountInNaira(trx.wallet.availableBalance))}
        Date: ${formatDate(new Date())}`,
        phone: trx.wallet?.user?.phone!,
        type: 'SMS',
      });

      return;
    }

    await prisma.$transaction(async (tx) => {
      const transfer = await tx.transfer.findFirst({
        where: { transactionReference: payload.paymentReference },
      });

      await tx.transfer.update({
        where: { id: transfer?.id },
        data: { status: 'FAILED' },
      });

      await tx.transaction.update({
        where: { itemId: transfer?.id },
        data: {
          status: 'FAILED',
        },
      });

      await tx.outboxEvent.create({
        data: {
          aggregateId: transfer?.id,
          topic: 'transfer.external.embedly.failed',
          payload: {
            transferId: transfer?.id,
            error: payload.message,
            ...payload,
          },
        },
      });
    });
  }
}

export async function inflow(payload: any) {
  // Incase of double webhook
  const _transfer = await prisma.transfer.findFirst({
    where: { transactionReference: payload.reference },
  });

  if (_transfer) return _transfer;

  const wallet = await prisma.wallet.findFirst({
    where: { accountNumber: payload?.accountNumber },
    include: { user: true },
  });

  if (!wallet) throw new CustomError('Wallet not found', 404);

  const transfer = await prisma.$transaction(async (tx) => {
    const provider = await prisma.provider.findFirst({
      where: { provider: 'EMBEDLY' },
    });

    const transfer = await tx.transfer.create({
      data: {
        provider: 'EMBEDLY',
        fromProviderId: provider?.id,
        amount: amountInKobo(payload.amount),
        currency: 'NGN',
        type: 'EXTERNAL',
        idempotencyKey: payload?.reference,
        transactionReference: payload?.reference,
        reason: payload.description,
        status: 'COMPLETED',
        shouldRefund: false,
        completedAt: new Date().toISOString(),
        metadata: {
          timestamp: new Date().toISOString(),
          type: 'INFLOW',
          completedAt: new Date().toISOString(),
        },
      },
    });

    // create JournalEntry
    const journal = await tx.journalEntry.create({
      data: {
        reference: payload.reference,
        transferId: transfer.id,
        description: payload.description,
        metadata: {
          fromProviderId: provider?.id,
          toWalletId: wallet.id,
        },
      },
    });

    const newToLedgerBal =
      BigInt(wallet.ledgerBalance as any) + amountInKobo(payload.amount);
    const newToAvailable =
      BigInt(wallet.availableBalance as any) + amountInKobo(payload.amount);

    await tx.ledger.create({
      data: {
        walletId: wallet.id,
        journalId: journal.id,
        transferId: transfer.id,
        change: amountInKobo(payload.amount),
        balanceAfter: newToLedgerBal,
        type: 'TRANSFER_CREDIT',
        metadata: {
          reason: payload.description,
          providerId: provider?.id,
        },
      },
    });

    await tx.wallet.update({
      where: { id: wallet.id },
      data: {
        ledgerBalance: newToLedgerBal,
        availableBalance: newToAvailable,
        version: { increment: 1 },
      },
    });

    await tx.transaction.create({
      data: {
        status: 'COMPLETED',
        amount: payload.amount,
        itemId: transfer.id,
        type: 'DEPOSIT',
        userId: wallet?.user?.id!,
        metadata: {
          currency: transfer.currency,
          type: 'credit',
          reason: payload.description,
          reference: payload?.reference,
        },
      },
    });
    return transfer;
  });

  //TODO: Trigger Notifications
  const newToAvailable =
    BigInt(wallet.availableBalance as any) + amountInKobo(payload.amount);
  await Queue.trigger(transfer?.id, 'NOTIFICATION', {
    country: wallet.user?.country ?? 'NG',
    message: `
        Acct: ******${wallet.accountNumber.slice(-4)}
        Amt: ${transfer.currency}${formatCurrency(payload.amount)} CR
        Desc: TRANSFER FROM ${payload?.senderName?.toUpperCase()} ${payload?.description?.toUpperCase()}
        Avail Bal: ${transfer.currency}${formatCurrency(amountInNaira(newToAvailable))}
        Date: ${formatDate(new Date())}`,
    phone: wallet.user?.phone!,
    type: 'SMS',
  });

  // Move money from user wallet to organization wallet

  // create outbox event
  const ref = crypto.randomUUID();
  await prisma.outboxEvent.create({
    data: {
      aggregateId: transfer.id,
      topic: 'transfer.internal.organization.initiated',
      payload: {
        transferId: transfer.id,
        fromAccount: wallet.accountNumber,
        toAccount: environment.embedly.orgAccount,
        remarks: 'Transfer from user wallet to organization wallet',
        transactionReference: ref,
        amount: payload.amount,
        currency: 'NGN',
        timestamp: new Date().toISOString(),
      },
    },
  });

  // Remove data object from this Queue
  await Queue.trigger(transfer.id, 'INTERNAL_TRANSFER', {
    fromAccount: wallet.accountNumber,
    toAccount: environment.embedly.orgAccount,
    remarks: 'Transfer from user wallet to organization wallet',
    transactionReference: ref,
    amount: payload.amount,
  });

  return transfer;
}
