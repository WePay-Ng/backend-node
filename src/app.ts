// src/app.ts
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';
import Routes from './routes';

const app = express();

app.use(helmet());
app.use(cors({ origin: '*' })); // tighten later
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

export const createApp = () => {
  app.get('/', (_, res) => res.json({ ok: true }));
  app.get('/health', (_, res) => res.json({ ok: true }));

  // register routes
  app.use('/api/v1', Routes);
  // app.use(errorHandler);

  app.use((req, res)=>{
    res.status(404).json({message: "Endpoint not found. please, check the url and try again."})
})

  return app;
};
