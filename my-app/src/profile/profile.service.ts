import { Injectable } from '@nestjs/common';
import { ProfileDto } from './DTO/createProfile.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  private profiles: ProfileDto[] = [];

  constructor(private readonly userService: UserService) {}

  getAllProfiles() {
    return this.profiles;
  }

  createProfile(profile: ProfileDto) {
    const user = this.userService.findUser(profile.id);
    if (!user) return 'User Not Found';
    this.profiles.push(profile);
    return profile;
  }

  getProfileById(id: number) {
    return this.profiles.find((profile) => profile.id === id);
  }

  updateProfile(id: number, updatedProfile: ProfileDto) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) return 'Profile not Found!';
    this.profiles[profileIndex] = updatedProfile;
    return updatedProfile;
  }

  deleteProfile(id: number) {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (profileIndex === -1) return 'Profile Not Found!';
    this.profiles.splice(profileIndex, 1);
    return 'Profile Deleted Successfully';
  }
}
