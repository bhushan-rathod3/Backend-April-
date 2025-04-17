import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { TweetService } from './tweet/tweet.service';
import { TweetModule } from './tweet/tweet.module';
import { Profile } from './profile/profile.entity';
import { Tweet } from './tweet/tweet.entity';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') || '3306', 10),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [User, Profile, Tweet],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UserModule,
    ProfileModule,
    TweetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
