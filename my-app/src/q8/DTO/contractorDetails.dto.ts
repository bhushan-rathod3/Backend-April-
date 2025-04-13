import { Type } from 'class-transformer';
import { IsDate, IsNumber, Max, Min, MinDate } from 'class-validator';

export class ContractorDetailsDto {
  @Type(() => Date)
  @IsDate()
  @MinDate(new Date(), { message: 'Contract end must be a future date' })
  contractEnd: Date;

  @IsNumber({}, { message: 'Hourly rate must be a valid number' })
  hourlyRate: number;
}
