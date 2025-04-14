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
    console.log('🎯 Route-specific interceptor triggered');
    return next.handle().pipe(
      tap((data) => {
        // Modify the response data
        data.customMessage = 'This is a custom message from the interceptor';
        console.log('Route-specific interceptor completed with modified data');
      }),
    );
  }
}
