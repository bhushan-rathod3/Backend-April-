import { RequestTimeoutException } from '@nestjs/common';

export function Timeout(ms: number): MethodDecorator {
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);

    descriptor.value = async function (...args: any[]) {
      return await Promise.race([
        original.apply(this, args),
        new Promise((_, reject) => {
          setTimeout(() => {
            reject(new RequestTimeoutException());
          }, ms);
        }),
      ]);
    };

    return descriptor;
  };
}
