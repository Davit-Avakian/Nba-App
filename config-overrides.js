const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': './src/components',
    '@images': './src/assets/images',
    '@data': './src/data'
  })(config);

  return config;
};
