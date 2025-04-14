import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url}`);

    return next
      .handle()
      .pipe(
        tap(() => console.log(`[${timestamp}] Completed ${method} ${url}`)),
      );
  }
}
