const buttonComponent =   function({  addUtilities, theme, e}) {
      const sizes = theme('sizes');

      const btnSizeVariants = Object.keys(sizes).reduce((acc, key) => {
        acc[`.btn--${e(key)}`] = {
            fontSize: sizes[key],
          };
          return acc;
      }, {})

      addUtilities(btnSizeVariants, ['responsive'])
}

module.exports = buttonComponent;
