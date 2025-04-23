import { Module } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { BorrowController } from './borrow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowRecord } from './entities/borrow.entity';
import { BookModule } from 'src/book/book.module';
import { MemberModule } from 'src/member/member.module';

@Module({
  controllers: [BorrowController],
  providers: [BorrowService],
  imports: [TypeOrmModule.forFeature([BorrowRecord]), BookModule, MemberModule],
})
export class BorrowModule {}
