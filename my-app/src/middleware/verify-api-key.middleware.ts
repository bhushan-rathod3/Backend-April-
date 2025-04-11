// middleware/verify-api-key.middleware.ts
import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VerifyApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    const validKey = process.env.API_KEY;

    if (!apiKey || apiKey !== validKey) {
      throw new ForbiddenException('Invalid or missing API key');
    }

    const ip = req.ip || req.connection.remoteAddress;
    console.log(`Request from IP: ${ip}`);

    next();
  }
}
