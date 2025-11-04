import { Router } from 'express';
import { Controller } from './controller';
import { idempotency } from '@/middleware/idempotency';

const router = Router();

router.post('/airtime', idempotency, Controller.airtime);

export default router;
