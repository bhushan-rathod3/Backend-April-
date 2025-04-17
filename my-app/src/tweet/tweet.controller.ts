import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweets')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  create(@Body() body) {
    return this.tweetService.create(body);
  }

  @Get()
  findAll() {
    return this.tweetService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) {
    return this.tweetService.findByUser(userId);
  }
}
