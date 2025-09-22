import { Router } from 'express';
import { Controller } from './controller';

const router = Router();

router.put('/:id/business', Controller.addBusiness);
router.post('/:id/verification', Controller.addVerification);

export default router;
