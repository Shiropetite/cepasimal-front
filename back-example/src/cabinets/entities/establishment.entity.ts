import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Cabinet } from './cabinet.entity';

@Entity({ tableName: 'establishments' })
export class Establishment {
	@PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
	id!: string;

	@Property()
	nic!: string;

	@Property()
	addressFirst!: string;

	@Property()
	addressSecond!: string;

	@Property({ default: false })
	investment!: boolean;

	@Property({ default: false })
	active!: boolean;

	@Property()
	postalCode!: string;

	@Property()
	city!: string;

	@Property()
	phone!: string;

	@Property({ nullable: true })
	country?: string;

	@Property({ nullable: true })
	email?: string;

	@ManyToOne({
		hidden: true,
	})
	cabinet!: Cabinet;
}
