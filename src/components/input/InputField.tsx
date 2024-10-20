import { CssUtils } from '@/utils/css_utils';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputSize, InputStyle, InputVariant } from './constants';
import { TextInputCss } from './css';
import { BaseTextInputProps } from './types';

export default function InputField(props: BaseTextInputProps): React.ReactElement {
	const { inputStyle, label, size, value, className, variant, error } = props;

	const labelTextClasses = TextInputCss.instance.getInputLabelTextStyles(size ?? InputSize.Medium);

	return (
		<View className="flex flex-col w-full py-1">
			{label && <Text className={labelTextClasses}>{label}</Text>}
			<TextInput
				{...props}
				value={value}
				className={CssUtils.instance.concat(
					TextInputCss.instance.getInputDefaultStyles(
						variant ?? InputVariant.Default,
						inputStyle ?? InputStyle.Default,
						size ?? InputSize.Medium,
					),
					className ?? '',
				)}
			/>
			{error && (
				<View className="flex flex-row items-center justify-center">
					<Feather name="alert-triangle" size={20} color="red" />
					<Text className="text-xs font-medium font-sans text-red-500">{error}</Text>
				</View>
			)}
		</View>
	);
}
