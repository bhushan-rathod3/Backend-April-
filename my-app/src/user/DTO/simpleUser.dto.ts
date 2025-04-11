import { IsString } from 'class-validator';

export class SimpleUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;
}
