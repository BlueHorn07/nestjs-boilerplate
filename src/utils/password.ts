import * as crypto from 'crypto';

export function encryptPassword(password: string, cryptoSalt: string): string {
  return crypto
    .pbkdf2Sync(password, cryptoSalt, 10000, 64, 'sha512')
    .toString('base64');
}
