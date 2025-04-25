import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersSeedService } from './users.seed';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersSeedService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
