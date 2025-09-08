// src/app.ts
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';
// import authRoutes from './modules/auth/auth.routes';
// import paymentRoutes from './modules/payments/payment.routes';

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: false })); // tighten later
  app.use(express.json());
  app.use(morgan('combined'));

  app.get('/', (_, res) => res.json({ ok: true }));
  app.get('/health', (_, res) => res.json({ ok: true }));

  // register routes
  //   app.use('/v1/auth', authRoutes);
  //   app.use('/v1/payments', paymentRoutes);

  app.use(errorHandler);

  return app;
};
