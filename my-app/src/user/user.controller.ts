import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from 'src/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwtauth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { CustomInterceptor } from 'src/interceptors/custom.interceptor';
import { UserService } from './user.service';

@Controller('user')
// @UseInterceptors(CustomInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  user() {
    return 'User Route';
  }

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

  @Get('secret')
  @UseGuards(RolesGuard)
  @Roles('admin')
  secret() {
    return "You're an admin!";
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return {
      message: 'JWT Auth Passed!',
      user: req.user,
    };
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }
}
