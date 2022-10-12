import { IsArray, IsUUID } from 'class-validator';

export class CreateCopyDto {
	@IsArray()
	@IsUUID('all', { each: true })
	ids: string[];
}
