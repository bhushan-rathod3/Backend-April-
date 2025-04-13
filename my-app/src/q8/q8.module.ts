import { Module } from '@nestjs/common';
import { Q8Controller } from './q8.controller';
import { Q8Service } from './q8.service';

@Module({
  controllers: [Q8Controller],
  providers: [Q8Service]
})
export class Q8Module {}
