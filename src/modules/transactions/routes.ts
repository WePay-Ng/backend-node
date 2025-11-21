import { Router } from 'express';
import { Controller } from './controller';

const router = Router();

router.get('/:id', Controller.get);
router.get('/', Controller.all);

export default router;
