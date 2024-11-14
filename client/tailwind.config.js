/* eslint-disable @typescript-eslint/no-require-imports */
const colors = require('tailwindcss/colors');
const buttonComponent = require('./tailwind-plugins/components/tailwindButton');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: colors.emerald,
			secondary: colors.blue,
			success: colors.lime,
			info: colors.cyan,
			warning: colors.yellow,
			danger: colors.rose,
			gray: colors.gray,
		},
		extend: {
			sizes: {
				small: '0.75rem',
				medium: '1.20rem',
				large: '1.40rem',
			},
		},
	},
	plugins: [buttonComponent],
};
