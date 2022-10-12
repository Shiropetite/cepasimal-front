import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';

import { Establishment } from './establishment.entity';

@Entity({ tableName: 'cabinets' })
export class Cabinet {
	@PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
	id!: string;

	@Property()
	siren!: string;

	@Property({ nullable: true })
	legalForm?: string;

	@Property({ nullable: true })
	ape?: string;

	@Property({ nullable: true })
	capital?: string;

	@Property({ nullable: true })
	currency?: string;

	@Property()
	companyName!: string;

	@Property({ nullable: true })
	activity?: string;

	@Property({ nullable: true })
	greffe?: string;

	@Property()
	tva!: string;

	@Property()
	website?: string;

	@OneToMany(() => Establishment, (establishment) => establishment.cabinet, {
		orphanRemoval: true,
	})
	establishments = new Collection<Establishment>(this);

	@Property({ hidden: true })
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date(), hidden: true })
	updatedAt: Date = new Date();
}
