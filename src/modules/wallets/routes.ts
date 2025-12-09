import { Router } from 'express';
import { Controller } from './controller';
import { idempotency } from '@/middleware/idempotency';

const router = Router();

router.post('/create', Controller.createWallet);
router.get('/banks', Controller.getBanks);
router.get('/:account', Controller.getWalletFromAccount);
router.post('/transfer', idempotency, Controller.transfer);
router.post('/external', idempotency, Controller.externalTransfer);
router.post('/internal', idempotency, Controller.internal);

export default router;
