import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber(undefined)
  phone: string;
}
