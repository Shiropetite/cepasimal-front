import { UnsupportedMediaTypeException } from '@nestjs/common';

export function customFileFilter(extensions: string[]) {
	return (
		req,
		file: Express.Multer.File,
		callback: (error: Error | null, acceptFile: boolean) => void,
	) => {
		if (extensions.some((m) => m === file.originalname.split('.').pop())) {
			callback(null, true);
		} else {
			callback(new UnsupportedMediaTypeException(`file wrong type`), false);
		}
	};
}
