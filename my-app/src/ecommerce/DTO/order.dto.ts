import { Type } from 'class-transformer';
import { CartItemDto } from './cart-item.dto';
import { IsArray, IsString, IsNumber, ValidateNested } from 'class-validator';

export class OrderDto {
  @IsString()
  orderId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto) // This ensures the CartItemDto is validated as well
  items: CartItemDto[];

  @IsNumber()
  totalAmount: number;

  @IsString()
  orderStatus: string;
}
