import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Session } from '@/modules/sessions';

import { getRequest } from '../helpers';

export const CurrentSession = createParamDecorator(
  (field: keyof Session | undefined, context: ExecutionContext) => {
    const request = getRequest(context);
    const session = request.session;

    if (!field) return session;

    return session?.[field];
  }
);
