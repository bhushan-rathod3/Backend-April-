import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CustomInterceptor } from 'src/interceptors/custom.interceptor';

@Controller('user')
export class UserController {
  @Get('stats')
  getUserStats() {
    return {
      totalUsers: 150,
      activeUsers: 93,
      nested: {
        percentageActive: 62.0,
      },
    };
  }

  @Get('interceptor')
  @UseInterceptors(CustomInterceptor)
  getSpecialRoute() {
    return { message: 'This route uses a custom interceptor' };
  }
}
