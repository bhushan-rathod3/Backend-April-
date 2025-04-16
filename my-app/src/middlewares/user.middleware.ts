// middleware/user.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const userId = Number(req.headers['x-user-id']);
    const user = this.userService.getUserById(userId || 1);
    req['user'] = user;
    next();
  }
}
