import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes';
import agentRoutes from './modules/agents/agent.routes';
import userRoutes from './modules/users/routes';
import merchantRoutes from './modules/merchants/routes';
import webhookRoutes from './modules/webhooks/routes';
import WalletRoutes from './modules/wallets/routes';
import PaymentRoutes from './modules/payments/routes';
import { BaseController } from './modules/Controller';
import Auth from './middleware/auth';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/webhooks', webhookRoutes);
router.use('/agents', Auth, agentRoutes);
router.use('/merchants', Auth, merchantRoutes);
router.use('/wallets', Auth, WalletRoutes);
router.use('/payments', Auth, PaymentRoutes);
router.post('/uploads/url', Auth, BaseController.generateUploadURL);

export default router;
