import { CssUtils } from '@/utils/css_utils';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonSize, ButtonType } from './constants';
import { ButtonCss } from './css';
import type { BaseButtonProps } from './types';

export default function BaseButton(props: BaseButtonProps): React.ReactElement {
	const { variant, onPress, label, children, type, size, classes, disabled } = props;

	const defaultedSize = size ?? ButtonSize.Medium;
	const defaultedType = type ?? ButtonType.Rounded;

	const css = ButtonCss.instance.getCss(variant, defaultedSize, defaultedType);
	const textColor = ButtonCss.instance.getVariantTextColor(variant);

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			className={CssUtils.instance.concat(css, classes ?? '')}
		>
			{children}
			{label != null && <Text className={textColor}>{label}</Text>}
		</TouchableOpacity>
	);
}
