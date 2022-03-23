/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-custom-media'),
    require('cssnano', {
      autoprefixer: {
        add: true,
        remove: true
      }
    })
  ]
};
