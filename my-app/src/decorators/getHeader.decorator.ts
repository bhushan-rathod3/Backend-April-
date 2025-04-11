import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserHeader = createParamDecorator(
  (_, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().headers,
);
