import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes';
import agentRoutes from './modules/agents/agent.routes';
import userRoutes from './modules/users/routes';
import merchantRoutes from './modules/merchants/routes';
import { BaseController } from './modules/Controller';
import Auth from './middleware/auth';

const router = Router();

router.post('/uploads/url', Auth, BaseController.generateUploadURL);
router.use('/auth', authRoutes);
router.use('/agents', Auth, agentRoutes);
router.use('/users', Auth, userRoutes);
router.use('/merchants', Auth, merchantRoutes);

export default router;
