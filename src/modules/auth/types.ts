import { AppContextActions } from '@/app/context/types';
import { AuthStack, MainTab } from '@/app/navigaton/types';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthRootProps = StackNavigationProp<AuthStack, 'AuthRoot'>;

export type SignInScreenProps = StackNavigationProp<AuthStack & MainTab, 'SignIn'>;

export type SignInArgs = {
	email: string;
	password: string;
};

export type SignUpArgs = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	dispatch: React.Dispatch<AppContextActions>;
};

export type AppUserConstructorArgs = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	avatarUrl?: string;
	age?: number;
};
