import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
	type: 'postgresql',
	// host: 'localhost',
	// port: 5432,
	// user: 'postgres',
	// password: '1234',
	// dbName: 'dbconn',
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/**/*.entity.ts'],
	debug: true,
	loadStrategy: LoadStrategy.JOINED,
	highlighter: new SqlHighlighter(),
	metadataProvider: TsMorphMetadataProvider,
	migrations: {
		path: 'dist/migrations',
		pathTs: 'src/migrations',
	},
};

export default config;
