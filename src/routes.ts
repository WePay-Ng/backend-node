import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes';
import agentRoutes from './modules/agents/agent.routes';
import userRoutes from './modules/users/routes';
import merchantRoutes from './modules/merchants/routes';
import { BaseController } from './modules/Controller';

const router = Router();

router.post('/uploads/url', BaseController.generateUploadURL);
router.use('/auth', authRoutes);
router.use('/agents', agentRoutes);
router.use('/users', userRoutes);
router.use('/merchants', merchantRoutes);

export default router;
