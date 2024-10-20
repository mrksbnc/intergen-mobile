import SignInResponse from '@/modules/auth/models/login_response.model';
import { supabaseClient } from './supabase_client';
import { FileUploadResponse, SignUpResponse } from './types';

export type SupabaseHook = {
	signInWithPassword: (email: string, password: string) => Promise<SignInResponse>;
	signUp: (email: string, password: string) => Promise<SignUpResponse>;
	signOut: () => Promise<void>;
	uploadFile: (bucket: string, file: File) => Promise<FileUploadResponse>;
	uploadFiles: (bucket: string, files: File[]) => Promise<FileUploadResponse[]>;
	deleteFile: (bucket: string, key: string) => Promise<void>;
	deleteFiles: (bucket: string, keys: string[]) => Promise<void>;
};

export const useSupabase = (): SupabaseHook => {
	/**
	 * @description Executes a login with password request to the Supabase API.
	 * Returns a Promise that resolves into a SignInResponse object.
	 */
	async function signInWithPassword(email: string, password: string): Promise<SignInResponse> {
		const { error, data } = await supabaseClient.auth.signInWithPassword({ email, password });

		if (error) {
			throw new Error(error.message);
		}

		return new SignInResponse(data.user, data.session, error);
	}

	async function signUp(email: string, password: string): Promise<SignUpResponse> {
		const { error, data } = await supabaseClient.auth.signUp({ email, password });

		if (error) {
			throw new Error(error.message);
		}

		if (!data) {
			throw new Error('No data returned from signUp request');
		}

		return data;
	}

	async function signOut(): Promise<void> {
		await supabaseClient.auth.signOut();
	}

	async function uploadFile(bucket: string, file: File): Promise<FileUploadResponse> {
		const { error, data } = await supabaseClient.storage.from(bucket).upload(file.name, file);

		if (error) {
			throw new Error(error.message);
		}

		return data;
	}

	async function uploadFiles(bucket: string, files: File[]): Promise<FileUploadResponse[]> {
		const responses: FileUploadResponse[] = [];

		for (const file of files) {
			const response = await uploadFile(bucket, file);

			if (!response) {
				throw new Error('No response returned from uploadFile request');
			}

			responses.push(response);
		}

		return responses;
	}

	async function deleteFile(bucket: string, key: string): Promise<void> {
		const { error } = await supabaseClient.storage.from(bucket).remove([key]);

		if (error) {
			throw new Error(error.message);
		}
	}

	async function deleteFiles(bucket: string, keys: string[]): Promise<void> {
		const { error } = await supabaseClient.storage.from(bucket).remove(keys);

		if (error) {
			throw new Error(error.message);
		}
	}

	return {
		signInWithPassword,
		signUp,
		signOut,
		uploadFile,
		uploadFiles,
		deleteFile,
		deleteFiles,
	};
};
