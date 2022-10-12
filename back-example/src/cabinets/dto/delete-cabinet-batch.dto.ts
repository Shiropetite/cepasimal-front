import { IsArray, IsUUID } from 'class-validator';
import { DeleteCabinetDto } from './delete-cabinet.dto';

export class DeleteCabinetBatchDto extends DeleteCabinetDto {
	@IsArray()
	@IsUUID('all', { each: true })
	ids: string[];
}
