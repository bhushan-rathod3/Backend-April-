import { Controller, Get, Param, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  authHome() {
    return 'Please go to verify route to verify user';
  }

  @Get('/verify/:id')
  verifyUser(@Param('id') id: string, @Query('token') token: string) {
    return this.authService.verifyProfile(+id, token);
  }
}
