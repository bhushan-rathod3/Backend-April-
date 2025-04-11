import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { TrimPipe } from 'src/pipes/trim.pipe';
import { ToUpperCasePipe } from 'src/pipes/upperCase.pipe';
import { User } from './DTO/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get('/status')
  getStatus(@Query('Active', ParseBoolPipe) Active: boolean) {
    return `User is ${Active ? 'Active' : 'Not Active'}`;
  }

  @Get(':id') //ParseIntPipe to transform the id param to a number.
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe()) // Apply validation to the User DTO
  createUser(@Body() user: User) {
    // Transform the name to uppercase
    user.name = new ToUpperCasePipe().transform(user.name, {
      type: 'body',
      data: 'name',
      metatype: String,
    });

    return user;
  }
}
