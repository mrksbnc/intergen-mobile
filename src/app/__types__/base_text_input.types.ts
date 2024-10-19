import { TextInputIOSProps } from 'react-native';

export type BaseTextInputProps = {
	value: string;
	onChangeText: (text: string) => void;
	placeholder?: string;
	placeholderTextColor?: string;
	className?: string;
	keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
	textContentType?: TextInputIOSProps['textContentType'];
	secureTextEntry?: boolean;
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};
