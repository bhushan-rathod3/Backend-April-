import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from './createProfile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  getProfileById(@Param('id') id: string) {
    return this.profileService.getProfileById(+id);
  }

  @Post()
  createProfile(@Body() profile: ProfileDto) {
    return this.profileService.createProfile(profile);
  }
}
