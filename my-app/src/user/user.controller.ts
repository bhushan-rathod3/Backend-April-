import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Timeout } from 'src/decorators/Timeout.decorator';
import { error } from 'console';
import { UserDto } from './DTO/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //GET /user   READ
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  //Question - 1 Task: Create a route GET /users/:id/role/:role
  @Get(':id/role/:role')
  getUserWithRole(
    @Param('id', ParseIntPipe) id: number,
    @Param('role') role: 'admin' | 'user',
  ) {
    return this.userService.getUserWithRole(id, role);
  }

  //   2. Custom Decorator  Task: (Decorator's Code in decorators/Timeout.decorator.ts)
  // Create a @Timeout(delay: number) decorator that cancels the request if it takes
  // longer than delay ms.
  @Get(':id')
  @Timeout(2000) //2 seconds limit
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUser(id);
  }

  //Q - 6
  @Post()
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const messages = errors.flatMap((e) =>
          Object.values(e.constraints || {}),
        );
        return new BadRequestException({
          message: 'Validation Failed',
          errors: messages,
        });
      },
    }),
  )
  validate(@Body() body: UserDto) {
    return { message: 'User is Valid!', body };
  }

  //POST /user  CREATE
  // @Post()
  // createUser(@Body() user: UserDto) {
  //   return this.userService.createUser(user);
  // }
  //PUT /user/id  UPDATE
  // @Put(':id')
  // updateUser(@Param('id') id: string, @Body() user: UserDto) {
  //   return this.userService.updateUser(+id, user);
  // }
  //DELETE /user/id   DELETE
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
