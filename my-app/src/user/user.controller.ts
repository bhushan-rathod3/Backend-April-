import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userService.findUser(+id);
  }

  @Post()
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }
}
