import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Route-specific interceptor triggered');
    return next.handle().pipe(
      tap((data) => {
        return {
          status: 'Success from interceptor',
          data,
        };
      }),
    );
  }
}
