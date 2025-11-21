import { Queue } from '@/jobs/queues';
import { prisma } from '@/prisma/client';
import { amountInKobo, amountInNaira } from '@/utils';
import CustomError from '@/utils/customError';

export async function airtime(
  userId: string,
  payload: {
    idempotencyKey: string;
    number: string;
    amount: bigint | number | string | any;
    country: string;
  },
) {
  const amt = amountInKobo(payload.amount);
  if (amt <= 0n) throw new Error('Amount must be positive');

  // idempotency guard
  const existing = await prisma.airtime.findUnique({
    where: { idempotencyKey: payload.idempotencyKey },
  });
  if (existing) return existing;

  // Resolve sender and recipient
  const fromUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { wallets: true },
  });
  const fromWallet = fromUser?.wallets?.[0];
  if (!fromWallet) throw new Error('Wallets not found');

  //   Check for sufficient amount here
  const avaiBal = Number(fromWallet.availableBalance);
  if (avaiBal < amt) throw new CustomError('Insufficient balance', 422);

  const airtime = await prisma.$transaction(async (tx) => {
    // lock wallets with FOR UPDATE
    // parameterize carefully
    const lockedRows = await tx.$queryRawUnsafe(
      `SELECT * FROM "Wallet" WHERE id IN ($1) FOR UPDATE`,
      fromWallet.id,
    );

    // map locked rows
    const lockedMap = (lockedRows as any[])[0];
    if (!lockedMap) throw new CustomError('Failed to lock wallets', 500);

    // check funds
    const available = BigInt(lockedMap.availableBalance);
    if (available < amt) throw new CustomError('Insufficient funds', 422);

    // create Airtime Transaction record
    let transaction = await tx.airtime.create({
      data: {
        idempotencyKey: payload.idempotencyKey,
        walletId: fromWallet.id,
        provider: 'AKUUK',
        phoneNumber: payload.number,
        network: 'MTN',
        amount: amt.toString(),
        currency: 'NGN',
        userId: userId,
        status: 'PENDING',
      } as any,
    });

    // Create a transaction
    await tx.transaction.create({
      data: {
        amount: -payload?.amount?.toString(),
        itemId: transaction.id,
        type: 'AIRTIME',
        status: 'PENDING',
        userId,
        metadata: {
          type: 'debit',
          provider: 'AKUUK',
          currency: 'NGN',
          network: 'MTN',
          phoneNumber: payload.number,
          walletId: fromWallet.id,
        },
      },
    });

    // create JournalEntry
    const journal = await tx.journalEntry.create({
      data: {
        reference: transaction.id,
        description: `Airtime Purchase to ${payload.number}`,
      },
    });

    // compute new balances
    const newUserLedgerBalance = BigInt(lockedMap.ledgerBalance) - amt;

    // create ledger rows (debit then credit), reference journal.id
    const debit = await tx.ledger.create({
      data: {
        wallet: { connect: { id: fromWallet.id } },
        journal: { connect: { id: journal?.id } },
        change: -amt,
        balanceAfter: newUserLedgerBalance,
        type: 'TRANSFER_DEBIT',
        metadata: {
          airtimeId: transaction.id,
          reason: `Airtime Purchase to ${payload.number}`,
          provider: 'AKUUK',
          network: 'MTN',
          phoneNumber: payload.number,
        },
      },
    });

    // update wallets balances
    await tx.wallet.update({
      where: { id: fromWallet.id },
      data: {
        ledgerBalance: newUserLedgerBalance,
        availableBalance: newUserLedgerBalance,
        version: { increment: 1 },
      },
    });

    // ++++++++++++++++++++++::+++++++++++++++++++++++++++++++++

    // Add this transaction to the Provider account
    const provider = await tx.provider.upsert({
      where: { provider: 'AKUUK' },
      create: { provider: 'AKUUK', balance: amt },
      update: {
        balance: { increment: amt.toString() } as any,
        total: { increment: 1 },
      },
    });

    // provider float ledger row (credit)
    await tx.ledger.create({
      data: {
        providerId: provider.id,
        journalId: journal.id,
        change: amt,
        balanceAfter: BigInt(provider.balance as any) + amt,
        type: 'TRANSFER_CREDIT',
        metadata: {
          airtimeId: transaction.id,
          provider: 'AKUUK',
          network: 'MTN',
          phoneNumber: payload.number,
        },
      },
    });
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // TODO:: Implement Kafka or SQS
    // create outbox event
    await tx.outboxEvent.create({
      data: {
        aggregateId: transaction.id,
        topic: 'airtime.purchase.initiated',
        payload: {
          airtimeId: transaction.id,
          userId,
          phoneNumber: payload.number,
          network: 'MTN',
          fromWalletId: fromWallet.id,
          amount: amountInNaira(amt),
          currency: 'NGN',
          country: payload.country,
        },
      },
    });

    // return structured result
    return {
      transaction: {
        ...transaction,
        amount: amountInNaira(amt),
      },
      journalId: journal.id,
      debitLedgerId: debit.id,
    };
  });

  await Queue.trigger(airtime.transaction.id, 'AIRTIME');
  return {
    ...airtime,
    amount: amountInNaira(amt),
  };
}
