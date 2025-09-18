// src/utils/jwt.ts
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { environment } from '../config/env';

export interface AuthJwtPayload extends JwtPayload {
  email: string;
}

export function signAccessToken(payload: object) {
  return jwt.sign(
    payload,
    environment.jwt.secret as string,
    {
      expiresIn: environment.jwt?.expiresIn ?? '30 days',
    } as SignOptions,
  );
}

export function verifyAccessToken(token: string): AuthJwtPayload {
  return jwt.verify(token, environment.jwt.secret) as AuthJwtPayload;
}

export function signRefreshToken(payload: object) {
  // long lived, but we still store a hashed copy server-side
  return jwt.sign(payload, environment.jwt.refreshSecret, {
    expiresIn: `${environment.jwt.refreshDays}d`,
  } as SignOptions);
}

export function verifyRefreshToken(token: string): AuthJwtPayload {
  return jwt.verify(token, environment.jwt.secret) as AuthJwtPayload;
}
