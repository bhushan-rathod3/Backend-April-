import { PartialType } from '@nestjs/mapped-types';
import { BorrowBookDto } from './create-borrow.dto';

export class UpdateBorrowRecordDto extends PartialType(BorrowBookDto) {}
