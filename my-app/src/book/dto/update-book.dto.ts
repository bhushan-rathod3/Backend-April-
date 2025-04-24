import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  ISBN?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;
}
