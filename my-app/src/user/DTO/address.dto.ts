import { IsString } from 'class-validator';
import { IsPostalCode } from 'src/validators/PostalCode';

export class AddressDto {
  @IsString()
  street: string;

  @IsString()
  @IsPostalCode()
  postalCode: string;
}
