import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepo: Repository<Profile>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(data: Partial<Profile> & { userId: number }) {
    const user = await this.userRepo.findOne({ where: { id: data.userId } });
    if (!user) {
      throw new NotFoundException('User not found for the given userId');
    }

    const profile = this.profileRepo.create({
      bio: data.bio,
      location: data.location,
      user: user,
    });

    return this.profileRepo.save(profile);
  }

  findAll() {
    return this.profileRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.profileRepo.findOne({ where: { id }, relations: ['user'] });
  }
}
