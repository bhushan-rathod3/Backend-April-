import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware';
import { VerifyApiKeyMiddleware } from './middleware/verify-api-key.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('admin');

    consumer.apply(VerifyApiKeyMiddleware).forRoutes({
      path: 'reports',
      method: RequestMethod.GET,
    });
  }
}
