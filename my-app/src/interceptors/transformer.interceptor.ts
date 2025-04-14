import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

function convertNumbersToStrings(obj: any): any {
  if (typeof obj === 'number') return obj.toString();
  if (Array.isArray(obj)) return obj.map(convertNumbersToStrings);
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      result[key] = convertNumbersToStrings(obj[key]);
    }
    return result;
  }
  return obj;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => convertNumbersToStrings(data)));
  }
}
