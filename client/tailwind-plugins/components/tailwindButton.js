const { white } = require('tailwindcss/colors');

const buttonComponent = function ({ addComponents, addUtilities, theme, e }) {
	const sizes = theme('sizes');
	const colors = theme('colors');

	const btnSizeVariants = Object.keys(sizes).reduce((acc, key) => {
		acc[`.btn--${e(key)}`] = {
			fontSize: sizes[key],
		};

		return acc;
	}, {});

	const btnColorsVariants = Object.keys(colors).reduce((acc, key) => {
		acc[`&.btn--${e(key)}`] = {
			backgroundColor: colors[key]['400'],
			color: white,
			borderColor: 'transparent',
			'&:hover': {
				filter: 'brightness(95.5%)',
			},
			'&:focus': {
				boxShadow: `0 0 0 .25rem ${colors[key]['50']}`,
				outline: 0,
			},
			'&.btn--outlined': {
				borderColor: colors[key]['500'],
				backgroundColor: 'transparent',
				color: colors[key]['500'],
				'&:hover': {
					backgroundColor: colors[key]['500'],
					color: white,
				},
			},
			'&.btn--inverted': {
				borderColor: 'transparent',
				backgroundColor: white,
				color: colors[key]['500'],
			},
			'&.--loading': {
				colors: 'transparent !importand',
				pointerEvents: 'none',
			},
		};

		return acc;
	}, {});

	addUtilities(btnSizeVariants, ['responsive']);

	addComponents({
		'.btn': {
			background: 'transparent',
			height: '2.5em',
			alignItems: 'center',
			borderColor: '#D1D5DB',
			borderRadius: '0.375rem',
			borderStyle: 'solid',
			borderWidth: '1px',
			boxShadow: 'none',
			color: '#1F2937',
			cursor: 'pointer',
			display: 'inline-flex',
			fontSize: '1rem',
			fontWeight: '400',
			justifyContent: 'center',
			margin: '0',
			padding: '0.75rem',
			position: 'relative',
			textAlign: 'center',
			textDecoration: 'none',
			verticalAlign: 'top',
			whiteSpace: 'nowrap',
			'&.btn--disabled': {
				pointerEvents: 'none',
				cursor: 'not-allowed',
				opacity: '0.5',
			},
			'&:focus': {
				boxShadow: `0 0 0 .25rem ${colors.gray['100']}`,
				outline: 0,
			},
			...btnColorsVariants,
		},
	});
};

module.exports = buttonComponent;
