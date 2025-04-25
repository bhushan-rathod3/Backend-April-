import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { BorrowBookDto } from './dto/create-borrow.dto';

@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post()
  borrow(@Body() borrowBookDto: BorrowBookDto) {
    return this.borrowService.borrowBook(borrowBookDto);
  }

  @Post('return/:id')
  returnBook(@Param('id') id: string) {
    return this.borrowService.returnBook(+id);
  }

  @Get('borrow-records')
  findAll() {
    return this.borrowService.findAll();
  }

  @Get('borrow-records/:id')
  findOne(@Param('id') id: string) {
    return this.borrowService.findOne(+id);
  }

  @Get('overdue')
  getOverdueBooks() {
    return this.borrowService.findOverdueBooks();
  }
}
