import { Router } from 'express';
import { Controller } from './controller';
import { idempotency } from '@/middleware/idempotency';

const router = Router();

router.get('/:account', Controller.getWalletFromAccount);
router.post('/transfer', idempotency, Controller.transfer);
router.post('/', idempotency, Controller.createWallet);
router.post('/external', Controller.externalTransfer);

export default router;
