import { IsString, MaxLength } from 'class-validator';
import { IsMetaDataKey } from 'src/validators/metaData';

export class MetaDataValidatorDto {
  @IsString()
  @IsMetaDataKey()
  key: string;

  @IsString({ message: 'Metadata values must be strings' })
  @MaxLength(255, { message: 'Metadata values must not exceed 255 characters' })
  value: string;
}
