// eslint-disable-next-line no-undef
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'nativewind/babel',
			[
				'module:react-native-dotenv',
				{
					safe: true,
					path: '.env',
					moduleName: '@env',
					envName: 'INTERGEN_APP_ENV',
					allowlist: ['SUPABASE_PROJECT_ID', 'SUPABASE_URL', 'SUPABASE_ANON_KEY'],
				},
			],
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'@': './src',
					},
				},
			],
		],
	};
};
