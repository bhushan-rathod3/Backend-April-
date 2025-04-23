import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  ISBN: string;

  @IsNumber()
  @Min(0)
  quantity: number;
}
