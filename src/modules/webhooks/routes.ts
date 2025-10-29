import { Router } from 'express';
import { Controller } from './controller';
import express from 'express';

const router = Router();

router.get('/akuuk', (req, res) => {
  res.status(200).json({
    message: 'success',
  });
});
router.post('/embedly', (req, res) => {
  res.send();
});
router.post(
  '/embedly/transfers',
  express.raw({ type: 'application/json' }),
  Controller.handleTransfers,
);

export default router;
