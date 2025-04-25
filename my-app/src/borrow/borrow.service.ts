import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BorrowRecord } from './entities/borrow.entity';
import { IsNull, LessThan, Repository } from 'typeorm';
import { BookService } from '../book/book.service';
import { MemberService } from '../member/member.service';
import { BookNotAvailableException } from 'src/common/filters/book-unavailable.filter';
import { BorrowBookDto } from './dto/create-borrow.dto';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(BorrowRecord)
    private borrowRepo: Repository<BorrowRecord>,
    private bookService: BookService,
    private memberService: MemberService,
  ) {}

  async findAll() {
    return await this.borrowRepo.find({
      relations: ['book', 'member'],
    });
  }

  async findOne(id: number) {
    return await this.borrowRepo.findOne({
      where: { id },
      relations: ['book', 'member'],
    });
  }

  async borrowBook(borrowBookDto: BorrowBookDto) {
    const book = await this.bookService.findById(borrowBookDto.bookId);
    if (!book) {
      throw new BookNotAvailableException('Book not found');
    }

    if (book.quantity <= 0) {
      throw new BookNotAvailableException('Book not available for borrowing');
    }

    const member = await this.memberService.findById(borrowBookDto.memberId);

    if (!member) {
      throw new HttpException('Member not Found', HttpStatus.NOT_FOUND);
    }

    const record = this.borrowRepo.create({
      ...borrowBookDto,
      borrowDate: new Date(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // +14 days
    });

    await this.bookService.decrementStock(borrowBookDto.bookId);

    return this.borrowRepo.save(record);
  }

  async returnBook(id: number) {
    const record = await this.borrowRepo.findOne({
      where: { id },
      relations: ['book'],
    });

    if (!record) {
      throw new HttpException('Borrow record not Found', HttpStatus.NOT_FOUND);
    }

    if (record.returnDate) {
      throw new HttpException('Book already returned', HttpStatus.NOT_FOUND);
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
