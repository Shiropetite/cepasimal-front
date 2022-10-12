import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: EntityRepository<User>,
	) {}

	async findOne(email: string): Promise<User> {
		return await this.userRepository.findOne({ email });
	}

	async findOneById(userId: string): Promise<User> {
		return await this.userRepository.findOne({ id: userId });
	}
}
