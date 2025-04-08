import { Injectable } from '@nestjs/common';
import { ProfileDto } from './createProfile.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  private profiles: ProfileDto[] = [];

  constructor(private readonly userService: UserService) {}

  createProfile(profile) {
    const user = this.userService.findUser(profile.id);
    if (!user) return 'User Not Found';
    this.profiles.push(profile);
    return profile;
  }

  getProfileById(id: number) {
    return this.profiles.find((profile) => profile.id === id);
  }
}
