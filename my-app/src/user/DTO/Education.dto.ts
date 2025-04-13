import { IsEnum, IsInt, Max, Min } from 'class-validator';

export enum Degree {
  BSc = 'BSc',
  MSc = 'MSc',
  PhD = 'PhD',
}

export class EducationDto {
  @IsEnum(Degree, { message: 'Degree must be one from BSc , MSc or PhD' })
  degree: string;

  @IsInt()
  @Min(1990, { message: 'Year must not be before 1990' })
  @Max(new Date().getFullYear(), {
    message: 'Year must not be after the current year',
  })
  year: number;
}
