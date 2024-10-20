import { ButtonSize, ButtonType, ButtonVariant, SocialButtonType } from './constants';

export type SocialButtonProps = {
	type: SocialButtonType;
	cssClass?: string;
	disabled?: boolean;
};

export type BaseButtonProps = {
	variant: ButtonVariant;
	onPress?: () => void;
	label?: string;
	children?: React.ReactNode;
	type?: ButtonType;
	size?: ButtonSize;
	disabled?: boolean;
	classes?: string;
};
