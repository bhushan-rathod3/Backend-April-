import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(RequestLoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Method: ${req.method}, URL: ${req.originalUrl}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    next();
  }
}
