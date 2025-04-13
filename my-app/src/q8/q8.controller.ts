import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Headers,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Q8Service } from './q8.service';
import { EmploymentDetailsDto } from './DTO/employmentDetails.dto';
import { formatErrors } from './utils/formatError';

@Controller('q8')
export class Q8Controller {
  constructor(private readonly q8Service: Q8Service) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const formattedErrors = formatErrors(errors);

        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Validation failed',
            errors: formattedErrors,
          },
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  )
  async validateEmplymentDetails(
    @Body() dto: EmploymentDetailsDto,
    @Headers('X-Country-Code') countryCode: string,
  ) {
    return this.q8Service.validateEmploymentDetails(dto, countryCode);
  }
}
