import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from './DTO/createProfile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  //GET /profile    READ
  @Get()
  getAllProfiles() {
    return this.profileService.getAllProfiles();
  }
  //GET /profile/id   READ
  @Get(':id')
  getProfileById(@Param('id') id: string) {
    return this.profileService.getProfileById(+id);
  }
  //POST /profile   CREATE
  @Post()
  createProfile(@Body() profile: ProfileDto) {
    return this.profileService.createProfile(profile);
  }
  //PUT /profile/id   UPDATE
  @Put(':id')
  updatedProfile(@Param('id') id: string, @Body() updatedProfile: ProfileDto) {
    return this.profileService.updateProfile(+id, updatedProfile);
  }
  //DELETE /profile/id    DELETE
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.profileService.deleteProfile(+id);
  }
}
