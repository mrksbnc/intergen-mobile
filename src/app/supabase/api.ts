import { supabaseClient } from './supabaseClient';

export const useSupabase = () => {
	const signInWithPassword = async (email: string, password: string) => {
		const { error, data } = await supabaseClient.auth.signInWithPassword({ email, password });

		if (error) {
			throw new Error(error.message);
		}

		return data;
	};

	const signUp = async (email: string, password: string) => {
		const { error } = await supabaseClient.auth.signUp({ email, password });

		if (error) {
			throw new Error(error.message);
		}
	};

	const signOut = async () => {
		await supabaseClient.auth.signOut();
	};

	const uploadFile = async (bucket: string, file: File) => {
		const { error, data } = await supabaseClient.storage.from(bucket).upload(file.name, file);

		if (error) {
			throw new Error(error.message);
		}

		return data;
	};

	const deleteFile = async (bucket: string, key: string) => {
		const { error } = await supabaseClient.storage.from(bucket).remove([key]);

		if (error) {
			throw new Error(error.message);
		}
	};

	return {
		signInWithPassword,
		signUp,
		signOut,
		uploadFile,
		deleteFile,
	};
};
