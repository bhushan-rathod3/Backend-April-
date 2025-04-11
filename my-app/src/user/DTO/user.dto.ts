import { IsEmail, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class UserDto {
  @Transform(({ value }) => value.trim().toLowerCase())
  @IsEmail()
  email: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  age: number;
}
