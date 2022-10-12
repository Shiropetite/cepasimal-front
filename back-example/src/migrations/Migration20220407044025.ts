import { Migration } from '@mikro-orm/migrations';

export class Migration20220407044025 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "cabinets" drop constraint "cabinets_contact_info_id_foreign";');

    this.addSql('create table "establishments" ("id" uuid not null default uuid_generate_v4(), "nic" varchar(255) not null, "address_first" varchar(255) not null, "address_second" varchar(255) not null, "investment" boolean not null default false, "active" boolean not null default false, "postal_code" varchar(255) not null, "city" varchar(255) not null, "phone" varchar(255) not null, "country" varchar(255) null, "email" varchar(255) null, "cabinet_id" uuid not null);');
    this.addSql('alter table "establishments" add constraint "establishments_pkey" primary key ("id");');

    this.addSql('alter table "establishments" add constraint "establishments_cabinet_id_foreign" foreign key ("cabinet_id") references "cabinets" ("id") on update cascade;');

    this.addSql('drop table if exists "cabinet_contact_info" cascade;');

    this.addSql('alter table "cabinets" add column "website" varchar(255) null;');
    this.addSql('alter table "cabinets" drop constraint "cabinets_contact_info_id_unique";');
    this.addSql('alter table "cabinets" drop column "nic";');
    this.addSql('alter table "cabinets" drop column "contact_info_id";');
  }

  async down(): Promise<void> {
    this.addSql('create table "cabinet_contact_info" ("id" uuid not null default uuid_generate_v4(), "street_number" varchar(255) not null, "street_name" varchar(255) not null, "postal_code" varchar(255) not null, "city" varchar(255) not null, "phone" varchar(255) not null, "country" varchar(255) null, "email" varchar(255) null, "website" varchar(255) null);');
    this.addSql('alter table "cabinet_contact_info" add constraint "cabinet_contact_info_pkey" primary key ("id");');

    this.addSql('drop table if exists "establishments" cascade;');

    this.addSql('alter table "cabinets" add column "nic" varchar(255) not null, add column "contact_info_id" uuid not null;');
    this.addSql('alter table "cabinets" add constraint "cabinets_contact_info_id_foreign" foreign key ("contact_info_id") references "cabinet_contact_info" ("id") on update cascade;');
    this.addSql('alter table "cabinets" drop column "website";');
    this.addSql('alter table "cabinets" add constraint "cabinets_contact_info_id_unique" unique ("contact_info_id");');
  }

}
