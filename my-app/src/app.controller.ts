import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { IsEvenPipe } from './pipes/is-even/is-even.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //   3. Pipe for Custom Validation
  // Task: Create a @IsEven() pipe that rejects numbers if not even
  // (for routes like GET /check-even/:num).

  @Get('/check-even/:num')
  isEven(@Param('num', IsEvenPipe) num: number) {
    return { message: `${num} is even` };
  }
}
