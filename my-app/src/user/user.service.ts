import { Injectable } from '@nestjs/common';
import { UserDto } from './createUser.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      id: 1,
      name: 'john',
    },
    {
      id: 2,
      name: 'bob',
    },
  ];

  getAll() {
    return this.users;
  }

  createUser(user: UserDto) {
    this.users.push(user);
    return user;
  }

  findUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
