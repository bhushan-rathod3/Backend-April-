import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { username } });

    if (user && user.password === password) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
