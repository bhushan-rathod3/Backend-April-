import {
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  //price cannot be less than 1
  @IsPositive()
  price: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  //tags, if provided, must each be at least 2 characters
  @MinLength(2, { each: true })
  tags?: string[];
}
