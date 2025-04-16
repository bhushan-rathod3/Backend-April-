import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Alice', role: 'user' },
    { id: 2, name: 'Bob', role: 'admin' },
    { id: 3, name: 'Charlie', role: 'guest' },
  ];

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers() {
    return this.users;
  }
}
