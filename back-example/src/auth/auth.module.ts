import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategy';
import { PasswordService } from './password.service';
import { LocalSerializer } from './local.serializer';

@Module({
	imports: [UsersModule, PassportModule],
	controllers: [AuthController],
	providers: [AuthService, PasswordService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
