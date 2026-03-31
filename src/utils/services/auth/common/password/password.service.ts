import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'node:crypto';

@Injectable()
export class PasswordService {
  constructor(private jwtService: JwtService) {}

  signJwt<T extends Record<string, unknown>>(payload: T) {
    return this.jwtService.sign(payload);
  }

  async validatePassword(password: string, hash: string) {
    return createHash('sha256').update(password).digest('hex') === hash;
  }

  async hashPassword(password: string) {
    return createHash('sha256').update(password).digest('hex');
  }
}
