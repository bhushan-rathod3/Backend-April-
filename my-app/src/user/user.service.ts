import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(query: any) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'id',
      order = 'ASC',
    } = query;

    const take = +limit;
    const skip = (page - 1) * take;

    const qb = this.userRepo.createQueryBuilder('user');

    if (search) {
      qb.where('user.username LIKE :search OR user.email LIKE :search', {
        search: `%${search}%`,
      });
    }

    qb.orderBy(
      `user.${sortBy}`,
      order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC',
    )
      .skip(skip)
      .take(take);

    const [items, total] = await qb.getManyAndCount();

    return {
      total,
      page: +page,
      limit: +limit,
      data: plainToInstance(User, items, { excludeExtraneousValues: true }),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByUsername(username: string) {
    return this.userRepo.findOne({ where: { username } });
  }

  async seedUsers() {
    const sampleUsers = Array.from({ length: 30 }, (_, i) => ({
      username: `user${i + 1}`,
      password: 'password',
      email: `user${i + 1}@mail.com`,
    }));

    const users = this.userRepo.create(sampleUsers);
    await this.userRepo.save(users);
    return { message: '30 users seeded' };
  }
}
