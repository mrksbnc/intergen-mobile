import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['dist/**/*'],
	},
	{
		files: ['./src/**/*.{js,jsx,ts,tsx}'],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
];
