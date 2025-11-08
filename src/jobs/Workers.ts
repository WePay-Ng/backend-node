import { QUEUE_NAMES } from '@/utils';
import { Worker } from 'bullmq';
import { processTransferEvent } from './process-transfer';
import { prisma } from '@/prisma/client';
import { processAirtimeEvent } from './process-airtime';
import { processNotificationsEvent } from './process-notifications';
import { environment } from '@/config/env';

const connection = {
  host: environment.redis.host,
  port: environment.redis.port,
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
};

export class Workers {
  static async transferWorker() {
    return new Worker(
      QUEUE_NAMES.TRANSFER,
      async (job) => {
        const { data } = job;
        try {
          if (job.attemptsMade === 0) {
            const result = await processTransferEvent(data.id);
            return result;
          }

          if (job.attemptsMade === 1) {
            // Use SafeHaven
          }
        } catch (error: any) {
          throw error;
        }
      },
      {
        connection,
        concurrency: 5,
      },
    );
  }

  static async airtimeWorker() {
    return new Worker(
      QUEUE_NAMES.AIRTIME,
      async (job) => {
        const { data } = job;
        try {
          if (job.attemptsMade === 0) {
            const result = await processAirtimeEvent(data.id);
            return result;
          }

          if (job.attemptsMade === 1) {
            // Use SafeHaven
          }
        } catch (error: any) {
          if (job.attemptsMade > 1)
            await prisma.outboxEvent.create({
              data: {
                aggregateId: data.id,
                topic: 'airtime.purchase.failed',
                payload: {
                  error: error.message,
                },
              },
            });
          throw error;
        }
      },
      {
        connection,
        concurrency: 5,
      },
    );
  }

  static async notificationWorker() {
    return new Worker(
      QUEUE_NAMES.NOTIFICATION,
      async (job) => {
        const { data } = job;
        try {
          const result = await processNotificationsEvent(data.id, data.data);
          return result;
        } catch (error: any) {
          throw error;
        }
      },
      {
        connection,
        concurrency: 5,
      },
    );
  }
}
