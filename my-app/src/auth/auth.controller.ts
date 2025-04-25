import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @UseGuards(AuthGuard)
  async login(@Request() req) {
    return {
      message: 'Login successful',
      user: {
        id: req.user.id,
        username: req.user.username,
        role: req.user.role,
      },
    };
  }
}
