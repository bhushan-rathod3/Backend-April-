import { HttpException, HttpStatus } from '@nestjs/common';

export class BookUnavailableException extends HttpException {
  constructor() {
    super('Book Unavailable', HttpStatus.BAD_REQUEST);
  }
}
