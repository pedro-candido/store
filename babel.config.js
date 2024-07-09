module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver", {
          "alias": {
            "@/*": ["./src"],
            "@constants": ["./src/constants"],
            "@components": ["./src/components"],
            "@hooks": ["./src/hooks"],
            "@routes": ["./src/routes"],
            "@store": ["./src/store"],
            "@screens": ["./src/screens"],
            "@utils": ["./src/utils"]
          }
        }
      ]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
