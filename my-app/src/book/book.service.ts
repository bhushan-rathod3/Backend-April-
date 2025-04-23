import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const book = this.bookRepo.create(createBookDto);
    return this.bookRepo.save(book);
  }

  async findAvailable() {
    return this.bookRepo.find({ where: { quantity: MoreThan(0) } });
  }

  async findById(id: number) {
    return this.bookRepo.findOne({ where: { id } });
  }

  async decrementStock(id: number) {
    const book = await this.findById(id);
    if (!book || book.quantity <= 0) throw new Error('Book not available');
    book.quantity--;
    await this.bookRepo.save(book);
  }

  async incrementStock(id: number) {
    const book = await this.findById(id);
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    book.quantity++;
    await this.bookRepo.save(book);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
