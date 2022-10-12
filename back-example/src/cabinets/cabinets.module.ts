import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { CabinetsService } from './cabinets.service';
import { CabinetsController } from './cabinets.controller';
import { Cabinet, Establishment } from './entities';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [Cabinet, Establishment] })],
	controllers: [CabinetsController],
	providers: [CabinetsService],
})
export class CabinetsModule {}
