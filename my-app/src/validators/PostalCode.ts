import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class PostalCodeConstraint implements ValidatorConstraintInterface {
  validate(PostalCode: string, args: any): boolean {
    const regexMap = {
      US: /^[0-9]{5}(-[0-9]{4})?$/,
      UK: /^[A-Z]{1,2}[0-9R][0-9A-Z]? ?[0-9][ABD-HJLNP-UW-Z]{2}$/,
      IN: /^[1-9][0-9]{5}$/,
    };

    const countryCode = args.object?.country || 'IN';
    return regexMap[countryCode]?.test(PostalCode) || false;
  }

  defaultMessage(args: any): string {
    return 'INVALID_POSTAL_CODE';
  }
}

export function IsPostalCode(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: PostalCodeConstraint,
    });
  };
}
