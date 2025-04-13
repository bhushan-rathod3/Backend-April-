import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class EmployeeTypeValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    const object = args?.object as any;
    if (object.employmentType === 'full-time' && !object.fullTimeDetails) {
      return false; // fullTimeDetails is required for full-time
    }

    if (object.employmentType === 'contractor' && !object.contractorDetails) {
      return false; // contractorDetails is required for contractor
    }

    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    return `fullTimeDetails or contractorDetails are missing based on employmentType`;
  }
}
