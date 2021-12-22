function color(variable) {
  return ({ opacityValue }) => {
    return `rgba(var(${variable}), ${opacityValue ?? 1})`;
  };
}

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  dark: 'class',
  theme: {
    extend: {
      textColor: {
        100: color('--tx-100'),
        200: color('--tx-200'),
        300: color('--tx-300'),
        danger: color('--tx-danger'),
      },
      backgroundColor: {
        page: color('--bg-page'),
        nav: color('--bg-nav'),
        input: color('--bg-input'),
        button: color('--bg-button'),
        element: color('--bg-element'),
        'element-hover': color('--bg-element-hover'),
        'element-active': color('--bg-element-active'),
      },
      borderColor: {
        100: color('--bd-100'),
        nav: color('--bd-nav'),
        input: color('--bd-input'),
      },
      gradientColorStops: {
        'bg-page': color('--bg-page'),
        'bg-nav': color('--bg-nav'),
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};
