module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // se não usa Reanimated, pode remover essa linha
      'react-native-reanimated/plugin',
    ],
  };
};
