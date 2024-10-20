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
	fullName: string;
};
