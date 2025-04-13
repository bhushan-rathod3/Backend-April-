import { Injectable } from '@nestjs/common';
import { EmploymentDetailsDto } from './DTO/employmentDetails.dto';

@Injectable()
export class Q8Service {
  validateEmploymentDetails(dto: EmploymentDetailsDto, countryCode: string) {
    const rateRange = countryCode === 'US' ? [20, 100] : [15, 80];

    // Dynamic validation for hourlyRate!
    if (
      dto.contractorDetails &&
      (dto.contractorDetails.hourlyRate < rateRange[0] ||
        dto.contractorDetails.hourlyRate > rateRange[1])
    ) {
      return {
        message: 'Validation failed',
        errors: {
          'contractorDetails.hourlyRate': {
            code: 'RATE_OUT_OF_RANGE',
            allowedRanges: { [countryCode]: rateRange },
          },
        },
      };
    }

    return { message: 'Data validated successfully', dto };
  }
}
