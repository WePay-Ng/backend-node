import { Router } from 'express';

const router = Router();

router.get('/akuuk', (req, res) => {
  res.status(200).json({
    message: 'success',
  });
});
router.post('/embedly', (req, res) => {
  res.send();
});
router.post('/embedly/transfers', (req, res) => {
  res.send();
});

export default router;
