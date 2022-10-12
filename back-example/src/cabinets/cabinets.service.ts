import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { wrap } from '@mikro-orm/core';

import {
	CreateCabinetDto,
	CreateCopyDto,
	DeleteCabinetBatchDto,
	DeleteCabinetDto,
	UpdateCabinetBatchDto,
	UpdateCabinetDto,
} from './dto';
import { Cabinet, Establishment } from './entities';

@Injectable()
export class CabinetsService {
	constructor(
		@InjectRepository(Cabinet)
		private readonly cabinetRepo: EntityRepository<Cabinet>,

		@InjectRepository(Establishment)
		private readonly establishmentRepo: EntityRepository<Establishment>,
	) {}

	async findAll(): Promise<Cabinet[]> {
		return await this.cabinetRepo.findAll({
			populate: ['establishments'],
		});
	}

	async findOne(id: string): Promise<Cabinet> {
		return await this.cabinetRepo.findOne(
			{ id },
			{
				populate: ['establishments'],
			},
		);
	}

	async create(dto: CreateCabinetDto): Promise<Cabinet> {
		const { establishments, ...cabinetDto } = dto;

		const cabinet = this.cabinetRepo.create(cabinetDto);

		for (const establishment of establishments) {
			const newEstablishment = this.establishmentRepo.create(establishment);
			cabinet.establishments.add(newEstablishment);
		}

		await this.cabinetRepo.persistAndFlush(cabinet);

		return cabinet;
	}

	async update(id: string, dto: UpdateCabinetDto): Promise<Cabinet> {
		const cabinet = await this.cabinetRepo.findOne(
			{ id },
			{
				populate: ['establishments'],
			},
		);

		if (!cabinet) {
			throw new NotFoundException('cabinet not found');
		}

		wrap(cabinet).assign(dto);

		await this.cabinetRepo.persistAndFlush(cabinet);

		return cabinet;
	}

	async duplicateBatch(dto: CreateCopyDto): Promise<Cabinet[]> {
		const { ids } = dto;

		const newCabinets = [];

		for (const id of ids) {
			const cabinet = await this.cabinetRepo.findOne(
				{ id },
				{
					populate: ['establishments'],
				},
			);

			if (!cabinet) {
				throw new NotFoundException('one or more cabinet not found');
			}

			const cabinetDto = wrap(cabinet).toObject(['id']);
			for (const establishment of cabinetDto.establishments) {
				delete establishment.id;
			}

			const newCabinet = this.cabinetRepo.create(cabinetDto);

			await this.cabinetRepo.persistAndFlush(newCabinet);

			newCabinets.push(newCabinet);
		}

		return newCabinets;
	}

	async updateBatch(dto: UpdateCabinetBatchDto): Promise<Cabinet[]> {
		const { ids, ...cabinetDto } = dto;

		const cabinets = await this.cabinetRepo.find({ id: { $in: ids } });

		if (cabinets.length !== ids.length) {
			throw new NotFoundException('one or more cabinets not found');
		}

		for (const cabinet of cabinets) {
			wrap(cabinet).assign(cabinetDto);
		}

		await this.cabinetRepo.flush();

		return cabinets;
	}

	async remove(id: string, { transferId }: DeleteCabinetDto): Promise<void> {
		const cabinet = await this.cabinetRepo.findOne(
			{ id },
			{
				populate: ['establishments'],
			},
		);

		if (!cabinet) {
			throw new NotFoundException('cabinet not found');
		}

		if (transferId) {
			const transferCabinet = await this.cabinetRepo.findOne({ id: transferId });

			if (!transferCabinet) {
				throw new NotFoundException('cabinet to transfer not found');
			}

			const establishments = cabinet.establishments.toArray();

			if (establishments.length > 0) {
				for (const establishment of establishments) {
					delete establishment.id;
					const newEstablishment = this.establishmentRepo.create(establishment);
					transferCabinet.establishments.add(newEstablishment);
				}

				await this.cabinetRepo.persistAndFlush(transferCabinet);
			}
		}

		await this.cabinetRepo.removeAndFlush(cabinet);
	}

	async removeBatch(dto: DeleteCabinetBatchDto): Promise<void> {
		const { ids, transferId } = dto;

		let transferCabinet;

		if (transferId) {
			transferCabinet = await this.cabinetRepo.findOne({ id: transferId });

			if (!transferCabinet) {
				throw new NotFoundException('cabinet to transfer not found');
			}
		}

		for (const id of ids) {
			const cabinet = await this.cabinetRepo.findOne({ id });

			if (!cabinet) {
				throw new NotFoundException('one or more cabinets not found');
			}

			if (transferCabinet) {
				const establishments = cabinet.establishments.toArray();

				if (establishments.length > 0) {
					for (const establishment of establishments) {
						delete establishment.id;
						const newEstablishment = this.establishmentRepo.create(establishment);
						transferCabinet.establishments.add(newEstablishment);
					}

					await this.cabinetRepo.persistAndFlush(transferCabinet);
				}
			}

			await this.cabinetRepo.removeAndFlush(cabinet);
		}
	}
}
