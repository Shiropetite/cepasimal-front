import { Migration } from '@mikro-orm/migrations';

export class Migration20220401125807 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'alter table "cabinets" add column "legal_form" varchar(255) null, add column "ape" varchar(255) null, add column "nic" varchar(255) not null, add column "company_name" varchar(255) not null, add column "greffe" varchar(255) null;',
		);
		this.addSql('alter table "cabinets" drop column "form";');
		this.addSql('alter table "cabinets" drop column "code_ape";');
		this.addSql('alter table "cabinets" drop column "nick";');
		this.addSql('alter table "cabinets" drop column "name";');
		this.addSql('alter table "cabinets" drop column "graft";');
	}

	async down(): Promise<void> {
		this.addSql(
			'alter table "cabinets" add column "form" varchar(255) null, add column "code_ape" varchar(255) null, add column "nick" varchar(255) not null, add column "name" varchar(255) not null, add column "graft" varchar(255) null;',
		);
		this.addSql('alter table "cabinets" drop column "legal_form";');
		this.addSql('alter table "cabinets" drop column "ape";');
		this.addSql('alter table "cabinets" drop column "nic";');
		this.addSql('alter table "cabinets" drop column "company_name";');
		this.addSql('alter table "cabinets" drop column "greffe";');
	}
}
