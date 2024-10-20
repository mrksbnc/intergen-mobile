import React from 'react';
import { View } from 'react-native';
import { DividerProps } from './types';

export default function Divider({ classes }: DividerProps): React.ReactElement {
	const css = /*tw*/ 'bg-gray-300 h-[1px] my-2 w-full ' + classes;

	return <View className={css} />;
}
