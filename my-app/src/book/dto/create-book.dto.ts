import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  ISBN: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantity: number;
}
