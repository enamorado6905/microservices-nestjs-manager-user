// wrap-response.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor<T>
  implements NestInterceptor<T, { data: T; status: number }>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<{ data: T; status: number }> {
    return next.handle().pipe(
      map((data) => ({
        data,
        status: context.switchToHttp().getResponse().statusCode,
      })),
    );
  }
}
