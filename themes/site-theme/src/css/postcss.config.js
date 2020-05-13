var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: {
   'postcss-import': {},
   'postcss-preset-env': {
	   browsers: ['last 2 versions', '> 5%'],
    },
    'tailwindcss': ('./css-config.js'),
    'cssnano': {},
    // '@fullhuman/postcss-purgecss': {
    //   content: ['../../../layouts/**/*.html', '../layouts/**/*.html','../static/**/*.js'],
    //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    // },
	}
};