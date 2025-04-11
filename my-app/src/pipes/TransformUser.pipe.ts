import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class TransformUserPipe implements PipeTransform {
  transform(value: any) {
    value.name = value.name?.trim();
    value.username = value.username?.toLowerCase();
    return value;
  }
}
