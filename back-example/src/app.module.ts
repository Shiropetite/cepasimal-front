import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import config from './common/config/mikro-orm.config';
import { AuthModule } from './auth/auth.module';
import { CabinetsModule } from './cabinets/cabinets.module';
import { FilesModule } from './files/files.module';

@Module({
	imports: [
		MikroOrmModule.forRoot(config),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		UsersModule,
		AuthModule,
		CabinetsModule,
		FilesModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(MikroOrmMiddleware).forRoutes('*');
	}
}
