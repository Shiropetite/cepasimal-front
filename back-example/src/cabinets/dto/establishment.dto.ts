import { IsBoolean, IsOptional } from 'class-validator';

export class EstablishmentDto {
	@IsOptional()
	id: string;

	@IsOptional()
	readonly nic!: string;

	@IsOptional()
	readonly addressFirst: string;

	@IsOptional()
	readonly addressSecond: string;

	@IsOptional()
	@IsBoolean()
	readonly investment: boolean;

	@IsOptional()
	@IsBoolean()
	readonly active: boolean;

	@IsOptional()
	readonly postalCode: string;

	@IsOptional()
	readonly city: string;

	@IsOptional()
	readonly phone: string;

	@IsOptional()
	readonly country?: string;

	@IsOptional()
	readonly email?: string;
}
