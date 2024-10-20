import { TextInputProps } from 'react-native';
import { InputSize, InputStyle, InputVariant } from './constants';

export interface BaseTextInputProps extends TextInputProps {
	value: string;
	label?: string;
	className?: string;
	variant?: InputVariant;
	size?: InputSize;
	inputStyle?: InputStyle;
	error?: string | null;
}
