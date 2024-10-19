import { useContext } from 'react';
import { AppContext } from '@/app/context/contexts';
import { SECURE_STORAGE_KEYS, useSecureStorage } from '@/hooks/useSecureStore';

let sharedInstance: ApiClient;

const { getItemAsync } = useSecureStorage();

export default class ApiClient {
	public static getInstance(): ApiClient {
		if (!sharedInstance) {
			sharedInstance = new ApiClient();
		}
		return sharedInstance;
	}

	private getAuthToken(): string | null {
		const {
			state: { token },
		} = useContext(AppContext);

		return token;
	}

	private async createHeaders(): Promise<Headers> {
		const headers = new Headers();
		let authToken = this.getAuthToken();

		if (!authToken) {
			authToken = await getItemAsync(SECURE_STORAGE_KEYS.TOKEN);

			if (!authToken) {
				return headers;
			}
		}

		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Authorization', 'Bearer ' + authToken);
		headers.append('Access-Control-Allow-Credentials', 'true');

		return headers;
	}

	public async get<T>(url: string): Promise<T> {
		const headers = await this.createHeaders();

		const response = await fetch(url, {
			method: 'GET',
			headers,
		});

		const paresedResponse = await response.json();
		return paresedResponse;
	}

	public async post<T, R>({ url, body }: { url: string; body: T }): Promise<R> {
		const headers = await this.createHeaders();

		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		});

		const paresedResponse = await response.json();
		return paresedResponse;
	}

	public async put<T, R>({ url, body }: { url: string; body: T }): Promise<R> {
		const headers = await this.createHeaders();

		const response = await fetch(url, {
			method: 'PUT',
			headers,
			body: JSON.stringify(body),
		});

		const paresedResponse = await response.json();
		return paresedResponse;
	}

	public async delete<T>({ url }: { url: string }): Promise<T> {
		const headers = await this.createHeaders();

		const response = await fetch(url, {
			method: 'DELETE',
			headers,
		});

		const paresedResponse = await response.json();
		return paresedResponse;
	}

	public async patch<T, R>({ url, body }: { url: string; body: T }): Promise<R> {
		const headers = await this.createHeaders();

		const response = await fetch(url, {
			method: 'PATCH',
			headers,
			body: JSON.stringify(body),
		});

		const paresedResponse = await response.json();
		return paresedResponse;
	}
}
