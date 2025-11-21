import { Router } from 'express';
import { Controller } from './controller';

const router = Router();

router.get('/transaction', Controller.get);
router.get('/transactions', Controller.all);

export default router;
