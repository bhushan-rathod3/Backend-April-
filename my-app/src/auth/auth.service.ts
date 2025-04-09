import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  validateToken(token: string): boolean {
    return token === 'star123';
  }

  verifyProfile(id: number, token: string) {
    if (!this.validateToken(token)) {
      return 'Unauthorized Access';
    }
    const user = this.userService.findUser(id);
    if (!user) {
      return 'User not Found';
    }

    return user;
  }
}
