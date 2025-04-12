import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IsEvenPipe implements PipeTransform {
  transform(value: any) {
    const number = parseInt(value, 10);

    if (isNaN(number)) {
      throw new BadRequestException();
    }

    if (number % 2 !== 0) {
      throw new BadRequestException('Number must be even');
    }
    return number;
  }
}
