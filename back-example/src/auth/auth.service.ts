import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { LoginDto } from './dto';
import { PasswordService } from './password.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UsersService,
		private readonly passwordService: PasswordService,
	) {}

	async login(dto: LoginDto): Promise<User | Error> {
		const { email, password } = dto;
		const user = await this.userService.findOne(email);

		if (!user) {
			throw new BadRequestException('user or password not valid');
		}

		const passwordValid = await this.passwordService.validatePassword(password, user.password);

		if (!passwordValid) {
			throw new BadRequestException('user or password not valid');
		}

		return user;
	}
}
