import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersSeedService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const count = await this.usersRepository.count();

    if (count === 0) {
      await this.usersRepository.save([
        {
          username: 'admin',
          password: 'admin123',
          role: 'ADMIN',
        },
        {
          username: 'user',
          password: 'user123',
          role: 'USER',
        },
      ]);
      console.log('Default users created');
    }
  }
}
