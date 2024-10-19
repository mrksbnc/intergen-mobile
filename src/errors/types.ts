import { ErrorCode, ErrorName } from '@/errors/error_constants';

export interface BaseError {
	code: ErrorCode;
	name: ErrorName | string;
	meta?: Record<string, unknown>;
}

export type ErrorConfig = {
	name: ErrorName;
	code: ErrorCode;
	meta?: Record<string, unknown>;
};
