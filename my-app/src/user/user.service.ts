import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/createUser.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      id: 1,
      name: 'john',
    },
  ];
  //Get All Users
  getAll() {
    return this.users;
  }
  //Create New User
  createUser(user: UserDto) {
    this.users.push(user);
    return user;
  }
  //Find User by ID
  findUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
  //Update User (Put)
  updateUser(id: number, updatedUser: UserDto): string | UserDto {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return 'User not found';
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }
  //Delete User by Id
  deleteUser(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return 'User not Found';
    this.users.splice(userIndex, 1);
    return 'User Deleted';
  }
}
