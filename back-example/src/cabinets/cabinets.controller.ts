import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	ParseUUIDPipe,
	HttpCode,
	HttpStatus,
	Put,
} from '@nestjs/common';

import { CabinetsService } from './cabinets.service';
import {
	CreateCabinetDto,
	UpdateCabinetDto,
	DeleteCabinetBatchDto,
	UpdateCabinetBatchDto,
	DeleteCabinetDto,
	CreateCopyDto,
} from './dto';
import { Cabinet } from './entities';

@Controller('cabinets')
export class CabinetsController {
	constructor(private readonly cabinetsService: CabinetsService) {}

	@HttpCode(HttpStatus.OK)
	@Get()
	async findAll(): Promise<Cabinet[]> {
		return this.cabinetsService.findAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Cabinet> {
		return this.cabinetsService.findOne(id);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post()
	async create(@Body() dto: CreateCabinetDto): Promise<Cabinet> {
		return this.cabinetsService.create(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Put('copy')
	async duplicateBatch(@Body() dto: CreateCopyDto): Promise<Cabinet[]> {
		return this.cabinetsService.duplicateBatch(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Patch(':id')
	update(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() dto: UpdateCabinetDto,
	): Promise<Cabinet> {
		return this.cabinetsService.update(id, dto);
	}

	@HttpCode(HttpStatus.OK)
	@Patch('update/batch')
	async updateBatch(@Body() dto: UpdateCabinetBatchDto): Promise<Cabinet[]> {
		return this.cabinetsService.updateBatch(dto);
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@Post('delete/:id')
	async remove(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() dto: DeleteCabinetDto,
	): Promise<void> {
		return this.cabinetsService.remove(id, dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post('delete')
	async removeBatch(@Body() dto: DeleteCabinetBatchDto): Promise<void> {
		return this.cabinetsService.removeBatch(dto);
	}
}
