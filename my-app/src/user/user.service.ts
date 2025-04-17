import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(user: Partial<User>) {
    const newUser = this.userRepo.create(user);
    return this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  update(id: number, user: Partial<User>) {
    return this.userRepo.update(id, user);
  }

  delete(id: number) {
    return this.userRepo.delete(id);
  }
}
