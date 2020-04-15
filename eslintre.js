
module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import'],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          alias: {
            "_scene": "./src/scene",
            "_routing": "./src/routing",
            "_reducks": "./src/reducks",
            "app" : './src/'
          },
        },
      },
    },
  };