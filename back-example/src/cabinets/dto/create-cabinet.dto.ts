import { IsArray, IsNotEmpty, IsOptional, IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { EstablishmentDto } from './establishment.dto';
import { IsOptionalWithEmpty } from '../../common/decorators/is-optional-with-empty.decorator';

export class CreateCabinetDto {
	@IsNotEmpty()
	readonly siren: string;

	@IsOptional()
	readonly legalForm?: string;

	@IsOptional()
	readonly ape?: string;

	@IsOptional()
	readonly capital?: string;

	@IsOptional()
	readonly currency?: string;

	@IsNotEmpty()
	readonly companyName: string;

	@IsOptional()
	readonly activity?: string;

	@IsOptional()
	readonly greffe?: string;

	@IsNotEmpty()
	readonly tva: string;

	@IsUrl()
	@IsOptionalWithEmpty()
	readonly website?: string;

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => EstablishmentDto)
	readonly establishments: EstablishmentDto[];
}
