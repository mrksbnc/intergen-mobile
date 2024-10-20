/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
		colors: {
			primary: '#A4FF74',
		},
	},
	plugins: [],
};
