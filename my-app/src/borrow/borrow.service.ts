import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BorrowRecord } from './entities/borrow.entity';
import { IsNull, LessThan, Repository } from 'typeorm';
import { BookService } from '../book/book.service';
import { MemberService } from '../member/member.service';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(BorrowRecord)
    private borrowRepo: Repository<BorrowRecord>,
    private bookService: BookService,
    private memberService: MemberService,
  ) {}

  async borrowBook(bookId: number, memberId: number) {
    await this.bookService.decrementStock(bookId);

    const book = await this.bookService.findById(bookId);
    const member = await this.memberService.findById(memberId);

    if (!book || !member) {
      throw new Error('Book or Member not found');
    }

    const record = this.borrowRepo.create({
      book: { id: book.id },
      member: { id: member.id },
      borrowDate: new Date(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // +14 days
    });

    return this.borrowRepo.save(record);
  }

  async returnBook(id: number) {
    const record = await this.borrowRepo.findOne({
      where: { id },
      relations: ['book'],
    });

    if (!record || record.returnDate) {
      throw new Error('Borrow record not found or already returned');
    }

    record.returnDate = new Date();
    await this.bookService.incrementStock(record.book.id);
    return this.borrowRepo.save(record);
  }

  async findOverdueBooks() {
    return this.borrowRepo.find({
      where: {
        returnDate: IsNull(),
        dueDate: LessThan(new Date()),
      },
      relations: ['book', 'member'],
    });
  }
}
