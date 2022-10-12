import {
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ParseFile } from './files.pipe';
import { customFileFilter } from './files.filter';

@Controller('files')
export class FilesController {
	@HttpCode(HttpStatus.OK)
	@Post('upload')
	@UseInterceptors(
		FileInterceptor('file', {
			fileFilter: customFileFilter(['png', 'jpg', 'eps', 'svg']),
			dest: '/tmp',
		}),
	)
	async upload(@UploadedFile(ParseFile) file: Express.Multer.File): Promise<Express.Multer.File> {
		return file;
	}
}
