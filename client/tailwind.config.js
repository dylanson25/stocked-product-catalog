const colors = require('tailwindcss/colors');

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
		},
		extend: {},
	},
	plugins: [],
};
