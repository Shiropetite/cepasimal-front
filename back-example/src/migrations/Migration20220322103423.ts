import { Migration } from '@mikro-orm/migrations';

export class Migration20220322103423 extends Migration {
	async up(): Promise<void> {
		this.addSql('create extension IF NOT EXISTS "uuid-ossp";'),
			this.addSql(
				'create table "users" ("id" uuid not null default uuid_generate_v4(), "email" varchar(255) not null, "name" varchar(255) not null, "password" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);',
			);
		this.addSql('alter table "users" add constraint "users_pkey" primary key ("id");');

		this.addSql(
			'create table "cabinets" ("id" uuid not null default uuid_generate_v4(), "siren" varchar(255) not null, "form" varchar(255) not null, "code_ape" varchar(255) not null, "capital" varchar(255) not null, "currency" varchar(255) not null, "nick" varchar(255) not null, "name" varchar(255) not null, "activity" varchar(255) not null, "graft" varchar(255) not null, "tva" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);',
		);
		this.addSql('alter table "cabinets" add constraint "cabinets_pkey" primary key ("id");');
	}
}
