import { Queue as BullQueue } from 'bullmq';
import { QUEUE_NAMES } from '@/utils';
import { environment } from '@/config/env';
import { Workers } from './Workers';
import IORedis from 'ioredis';

const redisClient = new IORedis(environment.redis.url, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

const defaultJobOptions = {
  attempts: 3,
  backoff: {
    type: 'exponential' as const,
    delay: 2000,
  },
  removeOnComplete: {
    count: 1000,
    age: 24 * 3600,
  },
  removeOnFail: {
    count: 5000,
    age: 7 * 24 * 3600,
  },
};

export const transferQueue = new BullQueue(QUEUE_NAMES.TRANSFER, {
  connection: redisClient,
  defaultJobOptions: {
    ...defaultJobOptions,
    attempts: 2,
  },
});

export const internalTransferQueue = new BullQueue(
  QUEUE_NAMES.INTERNAL_TRANSFER,
  {
    connection: redisClient,
    defaultJobOptions: {
      ...defaultJobOptions,
      attempts: 2,
    },
  },
);

export const airtimeQueue = new BullQueue(QUEUE_NAMES.AIRTIME, {
  connection: redisClient,
  defaultJobOptions: {
    ...defaultJobOptions,
    attempts: 2,
  },
});

export const notificationQueue = new BullQueue(QUEUE_NAMES.NOTIFICATION, {
  connection: redisClient,
  defaultJobOptions: {
    ...defaultJobOptions,
    // attempts: 2,
  },
});

export const embedlyWalletQueue = new BullQueue(QUEUE_NAMES.CREATEWALLET, {
  connection: redisClient,
  defaultJobOptions: {
    ...defaultJobOptions,
    attempts: 2,
  },
});

export class Queue {
  static async trigger(
    id: string,
    type: keyof typeof QUEUE_NAMES,
    data?: any,
  ): Promise<{ jobId: string; status: string }> {
    switch (type) {
      case 'AIRTIME':
        return this.triggerAirtime(id);

      case 'TRANSFER':
        return this.triggerTransfer(id);

      case 'NOTIFICATION':
        return this.triggerNotification(id, data);

      case 'CREATEWALLET':
        return this.triggerCreateEmbedlyWallet(id);

      case 'INTERNAL_TRANSFER':
        return this.triggerInternalTransfer(id, data);
      default:
        throw new Error(`Unknown queue type: ${type}`);
    }
  }

  private static async triggerAirtime(
    id: string,
  ): Promise<{ jobId: string; status: string }> {
    const job = await airtimeQueue.add(
      'process-airtime',
      { id },
      {
        jobId: `transfer-${id}`,
        priority: 2,
      },
    );

    return {
      jobId: job.id!,
      status: 'queued',
    };
  }

  private static async triggerTransfer(id: string) {
    const job = await transferQueue.add(
      'process-transfer',
      { id },
      {
        jobId: `transfer-${id}`,
        priority: 2,
      },
    );

    return {
      jobId: job.id!,
      status: 'queued',
    };
  }

  private static async triggerInternalTransfer(id: string, data: any) {
    const job = await transferQueue.add(
      'process-internal-transfer',
      { id, data },
      {
        jobId: `internal-transfer-${id}`,
        priority: 2,
      },
    );

    return {
      jobId: job.id!,
      status: 'queued',
    };
  }

  private static async triggerNotification(id: string, data: any) {
    const job = await notificationQueue.add(
      'process-notification',
      { id, data },
      {
        jobId: `notification-${id}`,
        priority: 3,
      },
    );

    return {
      jobId: job.id!,
      status: 'queued',
    };
  }

  private static async triggerCreateEmbedlyWallet(id: string) {
    const job = await embedlyWalletQueue.add(
      'process-create-embedly-wallet',
      { id },
      {
        jobId: `wallet-${id}`,
        priority: 3,
      },
    );

    return {
      jobId: job.id!,
      status: 'queued',
    };
  }
}

Workers.airtimeWorker();
Workers.transferWorker();
Workers.notificationWorker();
Workers.walletWorker();
Workers.internalTransferWorker();
