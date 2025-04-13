import { Type } from 'class-transformer';
import { IsIn, IsOptional, ValidateNested } from 'class-validator';
import { FullTimeDetailsDto } from './fullTimeDetails.dto';
import { ContractorDetailsDto } from './contractorDetails.dto';
import { MetaDataValidatorDto } from './metaDataValidator.dto';

export class EmploymentDetailsDto {
  @IsIn(['full-time', 'contractor'], {
    message: 'employmentType must be either "full-time" or "contractor"',
  })
  employmentType: 'full-time' | 'contractor';

  @IsOptional()
  @ValidateNested()
  @Type(() => FullTimeDetailsDto)
  fullTimeDetails?: FullTimeDetailsDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ContractorDetailsDto)
  contractorDetails?: ContractorDetailsDto;

  @ValidateNested({ each: true })
  @Type(() => MetaDataValidatorDto)
  metadata: MetaDataValidatorDto[];
}
