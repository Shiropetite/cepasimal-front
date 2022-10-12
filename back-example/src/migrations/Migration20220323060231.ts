import { Migration } from '@mikro-orm/migrations';

export class Migration20220323060231 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'create table "cabinet_contact_info" ("id" uuid not null default uuid_generate_v4(), "street_number" varchar(255) not null, "street_name" varchar(255) not null, "postal_code" varchar(255) not null, "city" varchar(255) not null, "phone" varchar(255) not null, "country" varchar(255) null, "email" varchar(255) null, "website" varchar(255) null);',
		);
		this.addSql(
			'alter table "cabinet_contact_info" add constraint "cabinet_contact_info_pkey" primary key ("id");',
		);

		this.addSql('alter table "cabinets" add column "contact_info_id" uuid not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_form_check";');
		this.addSql(
			'alter table "cabinets" alter column "form" type varchar(255) using ("form"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "form" drop not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_code_ape_check";');
		this.addSql(
			'alter table "cabinets" alter column "code_ape" type varchar(255) using ("code_ape"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "code_ape" drop not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_capital_check";');
		this.addSql(
			'alter table "cabinets" alter column "capital" type varchar(255) using ("capital"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "capital" drop not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_currency_check";');
		this.addSql(
			'alter table "cabinets" alter column "currency" type varchar(255) using ("currency"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "currency" drop not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_activity_check";');
		this.addSql(
			'alter table "cabinets" alter column "activity" type varchar(255) using ("activity"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "activity" drop not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_graft_check";');
		this.addSql(
			'alter table "cabinets" alter column "graft" type varchar(255) using ("graft"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "graft" drop not null;');
		this.addSql(
			'alter table "cabinets" add constraint "cabinets_contact_info_id_foreign" foreign key ("contact_info_id") references "cabinet_contact_info" ("id") on update cascade;',
		);
		this.addSql(
			'alter table "cabinets" add constraint "cabinets_contact_info_id_unique" unique ("contact_info_id");',
		);
	}

	async down(): Promise<void> {
		this.addSql('alter table "cabinets" drop constraint "cabinets_contact_info_id_foreign";');

		this.addSql('drop table if exists "cabinet_contact_info" cascade;');

		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_form_check";');
		this.addSql(
			'alter table "cabinets" alter column "form" type varchar(255) using ("form"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "form" set not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_code_ape_check";');
		this.addSql(
			'alter table "cabinets" alter column "code_ape" type varchar(255) using ("code_ape"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "code_ape" set not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_capital_check";');
		this.addSql(
			'alter table "cabinets" alter column "capital" type varchar(255) using ("capital"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "capital" set not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_currency_check";');
		this.addSql(
			'alter table "cabinets" alter column "currency" type varchar(255) using ("currency"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "currency" set not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_activity_check";');
		this.addSql(
			'alter table "cabinets" alter column "activity" type varchar(255) using ("activity"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "activity" set not null;');
		this.addSql('alter table "cabinets" drop constraint if exists "cabinets_graft_check";');
		this.addSql(
			'alter table "cabinets" alter column "graft" type varchar(255) using ("graft"::varchar(255));',
		);
		this.addSql('alter table "cabinets" alter column "graft" set not null;');
		this.addSql('alter table "cabinets" drop constraint "cabinets_contact_info_id_unique";');
		this.addSql('alter table "cabinets" drop column "contact_info_id";');
	}
}
