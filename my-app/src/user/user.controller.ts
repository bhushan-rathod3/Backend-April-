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
import { UserDto } from './DTO/user.dto';
import { UserHeader } from 'src/decorators/getHeader.decorator';
import { TransformUserPipe } from 'src/pipes/TransformUser.pipe';
import { SimpleUserDto } from './DTO/simpleUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @Get()
  //   getAll() {
  //     return this.userService.getAllUsers();
  //   }

  @Get('/status')
  getStatus(@Query('Active', ParseBoolPipe) Active: boolean) {
    return `User is ${Active ? 'Active' : 'Not Active'}`;
  }

  //   @Get(':id') //ParseIntPipe to transform the id param to a number.
  //   getUserById(@Param('id', ParseIntPipe) id: number) {
  //     return this.userService.getUserById(id);
  //   }

  //Q.19
  //   @Post()
  //   @UsePipes(new ValidationPipe({ transform: true }))
  //   createUser(@Body() user: UserDto) {
  //     return user;
  //   }

  @Post('')
  @UsePipes(new ValidationPipe())
  refactorUser(
    @Body(new TransformUserPipe()) body: SimpleUserDto,
    @UserHeader() headers: any,
  ) {
    return { body, userAgent: headers['user-agent'] };
  }
}
