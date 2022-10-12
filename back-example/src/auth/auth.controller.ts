import { Controller, Post, UseGuards, HttpCode, HttpStatus, Session, Get } from '@nestjs/common';
import { Session as ExpressSession } from 'express-session';

import { CurrentUser } from '../common/decorators';
import { LocalAuthGuard, SessionGuard } from './guards';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
	@HttpCode(HttpStatus.OK)
	@UseGuards(SessionGuard)
	@Get('me')
	async getCurrentUser(@CurrentUser() user: User): Promise<User> {
		return user;
	}

	@HttpCode(HttpStatus.OK)
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@CurrentUser() user: User) {
		return user;
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@UseGuards(SessionGuard)
	@Post('logout')
	async logout(@Session() session: ExpressSession) {
		session.cookie.maxAge = 0;
		return;
	}
}
