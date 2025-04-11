import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      email: 'noob@gmail.com',
      age: 12,
    },
  ];

  //   getAllUsers() {
  //     return this.users;
  //   }

  //   getUserById(id: number) {
  //     const user = this.users.find((user) => user.id === id);
  //     if (!user) return 'User Not Found!';
  //     return user;
  //   }
}
