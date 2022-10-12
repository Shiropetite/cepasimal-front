import { IsNotEmpty, IsOptional, IsUrl, IsUUID } from 'class-validator';

export class UpdateCabinetBatchDto {
	@IsUUID('all', { each: true })
	readonly ids: string[];

	@IsNotEmpty()
	readonly siren: string;

	@IsOptional()
	readonly legalForm?: string;

	@IsOptional()
	readonly ape?: string;

	@IsOptional()
	readonly capital?: string;

	@IsNotEmpty()
	readonly companyName: string;

	@IsOptional()
	readonly activity?: string;

	@IsOptional()
	readonly greffe?: string;

	@IsNotEmpty()
	readonly tva: string;

	@IsOptional()
	@IsUrl()
	readonly website?: string;
}
