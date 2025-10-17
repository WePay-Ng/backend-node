import { Router } from 'express';
import { Controller } from './controller';
import Auth from '@/middleware/auth';

const router = Router();

router.get('/me', Auth, Controller.currentUser);
router.put('/:id', Controller.updateUser);
router.patch('/:id', Controller.updateUser);
router.put('/:id/credentials', Controller.setCredentials);
router.patch('/:id/credentials', Controller.setCredentials);
router.post('/:id/verification', Controller.addVerification);
router.post('/:id/pin', Controller.createPin);
router.post('/:id/verify', Controller.verifyPin);

export default router;
