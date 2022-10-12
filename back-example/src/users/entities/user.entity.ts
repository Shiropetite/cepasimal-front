import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class User {
	@PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
	id: string;

	@Property()
	email!: string;

	@Property()
	name!: string;

	@Property()
	password!: string;

	@Property()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt: Date = new Date();
}
