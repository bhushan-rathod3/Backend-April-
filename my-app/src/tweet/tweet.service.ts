import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepo: Repository<Tweet>,
    private readonly userService: UserService,
  ) {}

  async create(data: Partial<Tweet>) {
    // Ensure that data.user is provided, not just userId
    const user = data.user; // Access the full user object directly

    // If user is not provided in the payload, throw an error
    if (!user || !user.id) {
      throw new Error('User ID is required');
    }

    // Check if the user exists using the UserService
    const existingUser = await this.userService.findOne(user.id);
    if (!existingUser) {
      throw new Error('User not found');
    }

    // Create and save the tweet with the user relation
    const tweet = this.tweetRepo.create({
      ...data, // Spread the original tweet data
      user: existingUser, // Set the existing user object to associate the user with the tweet
    });

    return this.tweetRepo.save(tweet);
  }

  findAll() {
    return this.tweetRepo.find({ relations: ['user'] });
  }

  findByUser(userId: number) {
    return this.tweetRepo.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}
