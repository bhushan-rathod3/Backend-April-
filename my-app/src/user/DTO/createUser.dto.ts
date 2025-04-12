import { IsEmail, IsInt, IsString, Length, Max, Min } from 'class-validator';

export class UserDto {
  @IsString()
  @Length(2, 50)
  firstName: string; // 2-50 chars

  @IsString()
  @Length(2, 50)
  lastName: string; // 2-50 chars

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Max(65)
  age: number; // 18-65
}
