import { BadRequestException } from '@nestjs/common';

export class InsufficientStockException extends BadRequestException {
  constructor() {
    super('Insufficient stock for the requested item');
  }
}
