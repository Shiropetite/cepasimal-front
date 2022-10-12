import { IsOptional, IsUUID } from 'class-validator';

export class DeleteCabinetDto {
	@IsOptional()
	@IsUUID()
	transferId: string;
}
