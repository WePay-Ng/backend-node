// src/modules/auth/auth.routes.ts
import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/verify/dob', AuthController.verifyDOB);
router.post('/login/fingerprint', AuthController.loginWithFingerPrint);
router.post('/password/forgot', AuthController.forgotPassword);
router.post('/password/reset', AuthController.resetPassword);
router.put('/:id/verify', AuthController.verifyOTP);
router.patch('/:id/verify', AuthController.verifyOTP);
router.post('/:id/otp', AuthController.sendOTP);
router.post('/pin/forgot', AuthController.forgotPin);
router.put('/pin/reset', AuthController.resetPin);
router.put('/pin/update', AuthController.updatePin);
router.get('/bvn', AuthController.getBVNDetails);

// Forget Pin

export default router;
