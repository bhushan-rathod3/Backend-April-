import { Type } from 'class-transformer';
import { IsArray, ArrayMinSize, IsDate, MinDate } from 'class-validator';
export class FullTimeDetailsDto {
  @IsArray()
  @ArrayMinSize(1, {
    message: 'At least one benefit is required for full-time employment',
  })
  benefits: string[];

  @Type(() => Date) // Transform string into Date
  @IsDate({ message: 'joiningDate must be a Date instance' })
  @MinDate(new Date(), { message: 'Joining date must be a future date' })
  joiningDate: Date;
}
