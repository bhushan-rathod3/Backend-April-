import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class QuantityValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') return value;

    if (value.quantity !== undefined && value.quantity <= 0) {
      throw new BadRequestException('Quantity must be positive');
    }

    return value;
  }
}
