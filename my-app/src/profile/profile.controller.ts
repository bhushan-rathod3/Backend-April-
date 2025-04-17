import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() body) {
    return this.profileService.create(body);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.profileService.findOne(id);
  }
}
