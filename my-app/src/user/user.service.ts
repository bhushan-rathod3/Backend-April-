import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/createUser.dto';
import { resolve } from 'path';

@Injectable()
export class UserService {
  private users = [
    { id: 1, role: 'admin', name: 'Admin User' },
    { id: 2, role: 'user', name: 'Regular User' },
    { id: 3, role: 'user', name: 'Another User' },
  ];

  //Get All Users
  getAll() {
    return this.users.filter((user) => user.role !== 'admin');
  }

  //Q - 1
  getUserWithRole(id: number, role: 'admin' | 'user') {
    const user = this.users.find(
      (user) => user.id === id && user.role === role,
    );
    if (!user) return `${role} not Found`;
    return user;
  }

  //Q - 2
  //Find User by ID
  async findUser(id: number) {
    //Simulating 3 seconds delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const user = this.users.find((user) => user.id === id);
    if (!user) return 'Not found';
    return user;
  }
}
