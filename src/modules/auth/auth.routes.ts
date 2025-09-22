// src/modules/auth/auth.routes.ts
import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/password/forgot', AuthController.forgotPassword);
router.post('/password/reset', AuthController.resetPassword);
router.put('/:id/verify', AuthController.verifyOTP);
router.patch('/:id/verify', AuthController.verifyOTP);

export default router;
