import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(['OPEN', 'DONE'], { message: 'Status must be either OPEN or DONE' })
  status: 'OPEN' | 'DONE';
}
