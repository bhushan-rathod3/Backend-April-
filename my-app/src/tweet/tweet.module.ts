import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { TweetService } from './tweet.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet]), UserModule],
  providers: [TweetService],
  controllers: [TweetController],
  exports: [TweetService],
})
export class TweetModule {}
