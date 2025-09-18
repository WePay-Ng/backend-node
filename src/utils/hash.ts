// src/utils/hash.ts
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function hashPassword(plain: string) {
  // default options for argon2 are fine; tune in prod if needed
  return bcrypt.hash(plain, 10);
}

export async function verifyPassword(hash: string, plain: string) {
  return bcrypt.compare(hash, plain);
}

export function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}
