import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //GET /user   READ
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  //GET /user/id  READ
  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userService.findUser(+id);
  }
  //POST /user  CREATE
  @Post()
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }
  //PUT /user/id  UPDATE
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UserDto) {
    return this.userService.updateUser(+id, user);
  }
  //DELETE /user/id   DELETE
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
