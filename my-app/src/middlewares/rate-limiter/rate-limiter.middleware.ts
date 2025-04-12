import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

const RATE_LIMIT = 3;
const TIME_WINDOW = 60 * 1000;

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  private requestMap = new Map<string, { count: number; timestamp: number }>();

  use(req: any, res: any, next: () => void) {
    const ip = req.ip;

    const currentTime = Date.now();
    const entry = this.requestMap.get(ip);

    if (!entry) {
      this.requestMap.set(ip, { count: 1, timestamp: currentTime });
      return next();
    }

    const { count, timestamp } = entry;

    if (currentTime - timestamp > TIME_WINDOW) {
      //reset window
      this.requestMap.set(ip, { count: 1, timestamp: currentTime });
      return next();
    }

    if (count >= RATE_LIMIT) {
      throw new HttpException(
        'Too Many Requests - Try Again Later',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    this.requestMap.set(ip, { count: count + 1, timestamp });
    next();
  }
}
