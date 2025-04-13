import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RateLimiterMiddleware } from './middlewares/rate-limiter/rate-limiter.middleware';
import { Q8Module } from './q8/q8.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';

@Module({
  imports: [UserModule, Q8Module, EcommerceModule],
  controllers: [AppController],
  providers: [AppService],
})

// Q - 4 Middleware for Rate Limiting
//  Task: Implement middleware to allow only 3 requests/minute per IP (use Map to store IP
// counts).
export class AppModule implements NestModule {
  //for middleware code -> /middlewares/rate-limiter.middleware.ts
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RateLimiterMiddleware).forRoutes('*');
  }
}
