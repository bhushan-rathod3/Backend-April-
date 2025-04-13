import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { CartItemDto } from './DTO/cart-item.dto';
import { EcommerceService } from './ecommerce.service';
import { PaymentDto } from './DTO/payment.dto';

@Controller('ecommerce')
export class EcommerceController {
  constructor(private readonly ecommerceService: EcommerceService) {}

  @Get('cart')
  getCart() {
    return this.ecommerceService.getCart();
  }

  @Get('orders')
  getOrders() {
    return this.ecommerceService.getOrders();
  }

  @Post('add-to-cart')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  addToCart(@Body() cartItemDto: CartItemDto) {
    return this.ecommerceService.addToCart(cartItemDto);
  }

  @Post('process-payment')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  processPayment(@Body() paymentDto: PaymentDto) {
    return this.ecommerceService.processPayment(paymentDto);
  }

  @Post('place-order')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  placeOrder() {
    return this.ecommerceService.placeOrder();
  }
}
