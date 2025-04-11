import { IsNumber, IsString } from 'class-validator';

export class User {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  //   @IsString()
  //   @Transform(({ value }) => value.toUpperCase()) // Apply the transformation
  //   name: string;
  //
}
