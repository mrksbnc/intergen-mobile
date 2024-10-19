import { BaseError, type ErrorConfig } from './types';
import { ErrorCode, ErrorName } from './error_constants';

export class ApplicationError extends Error implements BaseError {
	code: number;
	name: string;
	meta?: Record<string, unknown>;

	constructor(error: unknown, config?: ErrorConfig) {
		if (error instanceof Error) {
			super(error.message);
			this.name = error.name;
			this.code = ErrorCode.RuntimeError;
		} else {
			super();
			this.name = config?.name ?? ErrorName.ApplicationError;
			this.code = config?.code ?? ErrorCode.ApplicationError;
			this.meta = config?.meta;
		}
	}
}
