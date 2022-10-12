import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as session from 'express-session';
import * as passport from 'passport';
import * as createRedisStore from 'connect-redis';
import * as Redis from 'ioredis';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// get config
	const configService = app.get(ConfigService);

	// config Redis
	const RedisStore = createRedisStore(session);
	const redisClient = new Redis(configService.get<string>('REDIS_URI'));

	// add sessions
	app.use(
		session({
			store: new RedisStore({ client: redisClient }),
			secret: configService.get<string>('SESSION_SECRET'),
			resave: false,
			saveUninitialized: false,
		}),
	);

	app.enableCors();
	app.use(passport.initialize());
	app.use(passport.session());

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);
	app.setGlobalPrefix('/api/v1');
	app.enableShutdownHooks();

	await app.listen(configService.get<string>('NEST_PORT') || 3000);
}
bootstrap();
