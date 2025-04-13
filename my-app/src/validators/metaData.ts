import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class MetaDetaKeyValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return /^[a-z0-9_]+$/.test(value);
  }

  defaultMessage(): string {
    return 'Metadata keys must match the pattern /^[a-z0-9_]+$/';
  }
}

export function IsMetaDataKey(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: MetaDetaKeyValidator,
    });
  };
}
