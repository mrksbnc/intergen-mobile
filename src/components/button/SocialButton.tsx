import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import type { SocialButtonProps } from './types';

export default function SocialButton({ type, cssClass, disabled }: SocialButtonProps): React.ReactElement {
	const getSocialIcon = () => {
		switch (type) {
			case 'apple':
				return require('@assets/social/apple.png');
			case 'facebook':
				return require('@assets/social/facebook.png');
			case 'google':
				return require('@assets/social/google.png');
			default:
				return '';
		}
	};

	return (
		<TouchableOpacity disabled={disabled} className={`${cssClass} w-10 h-10 bg-transparent rounded-full`}>
			<Image source={getSocialIcon()} className="w-10 h-10" />
		</TouchableOpacity>
	);
}
