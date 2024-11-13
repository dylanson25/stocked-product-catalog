const buttonComponent =   function({ addComponents, addUtilities, theme, e}) {
  const sizes = theme('sizes');

  const btnSizeVariants = Object.keys(sizes).reduce((acc, key) => {
    acc[`.btn--${e(key)}`] = {
        fontSize: sizes[key],
      };
      return acc;
  }, {})
  addUtilities(btnSizeVariants, ['responsive'])

  addComponents({
    '.btn': {
        borderColor: '#D1D5DB',
        color: '#1F2937',
        position: 'relative',
        margin: '0',
        display: 'inline-flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        borderRadius: '0.375rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '0.75rem',
        textAlign: 'center',
        verticalAlign: 'top',
        fontSize: '1rem',
        fontWeight: '400',
        boxShadow: 'none',
        textDecoration: 'none',
	     background: 'transparent',
	     height: '2.5em',
        '&.btn--disabled': {
          pointerEvents: 'none',
          cursor: 'not-allowed',
          opacity: '0.5',
        }
      },
  })
}

module.exports = buttonComponent;
