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

  @Post('borrow')
  borrow(@Body() dto: BorrowBookDto) {
    return this.borrowService.borrowBook(dto.bookId, dto.memberId);
  }

  @Post('return/:id')
  returnBook(@Param('id') id: string) {
    return this.borrowService.returnBook(Number(id));
  }

  @Get('overdue')
  getOverdueBooks() {
    return this.borrowService.findOverdueBooks();
  }
}
