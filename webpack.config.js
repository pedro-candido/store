const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Enable tree shaking optimizations
  config.optimization = {
    ...config.optimization,
    usedExports: true,
  };

  // Mark project source as side-effect free
  config.module.rules.push({
    test: /\.[jt]sx?$/,
    include: path.resolve(__dirname, 'src'),
    sideEffects: false,
  });

  return config;
};
