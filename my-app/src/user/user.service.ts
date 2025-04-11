import { Injectable } from '@nestjs/common';
import { User } from './DTO/user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'john',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return 'User Not Found!';
    return user;
  }
}
