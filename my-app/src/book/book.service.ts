import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { BookNotAvailableException } from 'src/common/filters/book-unavailable.filter';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = this.bookRepo.create(createBookDto);
    return await this.bookRepo.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepo.find();
  }

  async findAvailable() {
    return await this.bookRepo.find({ where: { quantity: MoreThan(0) } });
  }

  async findById(id: number) {
    return this.bookRepo.findOne({ where: { id } });
  }

  async decrementStock(id: number) {
    const book = await this.findById(id);
    if (!book || book.quantity <= 0)
      throw new BookNotAvailableException('Book not available for borrowing');
    book.quantity--;
    await this.bookRepo.save(book);
  }

  async incrementStock(id: number) {
    const book = await this.findById(id);
    if (!book) {
      return new BookNotAvailableException('Book Not Found');
    }
    book.quantity++;
    await this.bookRepo.save(book);
  }

  async patch(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.findById(id);
    if (!book) return new BookNotAvailableException('Book Not Found');
    const updatedBook = this.bookRepo.merge(book, updateBookDto);

    return this.bookRepo.save(updatedBook);
  }

  async remove(id: number) {
    const book = await this.findById(id);
    if (!book) throw new BookNotAvailableException('Book Not Found');

    return await this.bookRepo.remove(book);
  }
}
