import { IsString, IsInt, Min } from 'class-validator';

export class CartItemDto {
  @IsString()
  itemId: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsInt()
  price: number;
}
