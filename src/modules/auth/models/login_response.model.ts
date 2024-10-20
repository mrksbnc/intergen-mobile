import { AuthApiError, Session, User } from '@supabase/supabase-js';

export default class SignInResponse {
	user: User | null;
	session: Session | null;
	error: AuthApiError | null;

	constructor(user: User | null, session: Session | null, error: AuthApiError | null) {
		this.user = user;
		this.session = session;
		this.error = error;
	}

	get isSuccessful(): boolean {
		return this.error === null;
	}

	get isFailed(): boolean {
		return this.error !== null;
	}

	get isAuthenticated(): boolean {
		return this.session !== null;
	}

	get isUnauthenticated(): boolean {
		return this.session === null;
	}

	get isInvalidCredentials(): boolean {
		return this.error?.message === 'Invalid credentials';
	}

	get isInvalidEmail(): boolean {
		return this.error?.message === 'Invalid email';
	}

	get isInvalidPassword(): boolean {
		return this.error?.message === 'Invalid password';
	}
}
