import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = ['OPEN', 'DONE'];

  transform(value: any) {
    if (!value) return value;

    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatuses.includes(status);
  }
}
