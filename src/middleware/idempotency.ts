// src/middleware/idempotency.ts
import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { prisma } from '../prisma/client';

export async function idempotency(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const key = req.header('Idempotency-Key');
  if (!key) return next();

  const reqHash = crypto
    .createHash('sha256')
    .update(JSON.stringify({ url: req.originalUrl, body: req.body }))
    .digest('hex');

  const existing = await prisma.idempotencyKey.findUnique({ where: { key } });
  if (existing) {
    if (existing.requestHash !== reqHash) {
      return res.status(409).json({ error: 'Idempotency key conflict' });
    }
    if (existing.responseBody) {
      return res.status(existing.statusCode ?? 200).json(existing.responseBody);
    }
  } else {
    await prisma.idempotencyKey.create({
      data: { key, requestHash: reqHash, lockedAt: new Date() },
    });
  }
  next();
}
