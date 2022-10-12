import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
	const { user } = context.switchToHttp().getRequest();
	return {
		id: user.id,
		name: user.name,
		email: user.email,
	};
});
