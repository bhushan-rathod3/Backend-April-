import { IsUUID, ValidateNested } from 'class-validator';
import { AddressDto } from './address.dto';
import { Type } from 'class-transformer';
import { EducationDto } from './Education.dto';

export class UserDetailsDto {
  @IsUUID()
  id: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @ValidateNested({ each: true })
  @Type(() => EducationDto)
  education: EducationDto[];
}
