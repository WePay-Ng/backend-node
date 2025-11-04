import { processAirtimeEvent } from './process-airtime';
import Bottleneck from 'bottleneck';

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});

export class Queue {
  static trigger(id: string, type: string) {
    switch (type) {
      case 'AIRTIME':
        limiter.schedule(() => processAirtimeEvent(id));
        break;

      default:
        break;
    }
  }
}
