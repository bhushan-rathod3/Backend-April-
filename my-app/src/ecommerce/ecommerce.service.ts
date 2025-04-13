import { Injectable } from '@nestjs/common';
import { CartItemDto } from './DTO/cart-item.dto';
import { InsufficientStockException } from './exceptions/insufficient-stock.exception';
import { PaymentDto } from './DTO/payment.dto';
import { OrderDto } from './DTO/order.dto';

@Injectable()
export class EcommerceService {
  private cart: CartItemDto[] = [];
  private orders: OrderDto[] = [];
  private stock = { item1: 10, item2: 5 };

  getCart() {
    return { cart: this.cart };
  }

  getOrders() {
    return { orders: this.orders };
  }

  addToCart(cartItemDto: CartItemDto) {
    const { itemId, quantity } = cartItemDto;

    if (this.stock[itemId] < quantity) {
      throw new InsufficientStockException();
    }

    this.cart.push(cartItemDto);
    this.stock[itemId] -= quantity;
    return { message: 'Item added to cart' };
  }

  processPayment(paymentDto: PaymentDto) {
    const { paymentMethod, amount } = paymentDto;
    if (amount <= 0) {
      throw new Error('Invalid payment amount');
    }
    // Mock payment processing
    return { message: `Payment processed with ${paymentMethod}` };
  }

  placeOrder() {
    if (this.cart.length === 0) {
      throw new Error('Cart is empty');
    }

    const order = {
      orderId: Date.now().toString(), // Generate unique orderId (timestamp)
      items: this.cart,
      totalAmount: this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
      orderStatus: 'Confirmed',
    };

    this.orders.push(order);
    this.cart = []; // Empty cart after order placement
    return { message: 'Order placed successfully', order };
  }
}
