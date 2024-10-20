import { AppUserConstructorArgs } from '../types';

export default class AppUser {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	age: number | null;
	avatarUrl: string | null;

	constructor(args: AppUserConstructorArgs) {
		this.id = args.id;
		this.email = args.email;
		this.firstName = args.firstName;
		this.lastName = args.lastName;
		this.age = args.age ?? null;
		this.avatarUrl = args.avatarUrl ?? null;
	}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	get fullNameWithAge(): { fullName: string; age: number | null } {
		return {
			fullName: this.fullName,
			age: this.age,
		};
	}

	get fullNameWithAgeAndAvatar(): {
		fullName: string;
		age: number | null;
		avatarUrl: string | null;
	} {
		return {
			fullName: this.fullName,
			age: this.age,
			avatarUrl: this.avatarUrl,
		};
	}
}
