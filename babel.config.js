module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ios.js", ".android.js"],
          alias: {
            "_scene": "./src/scene",
            "_routing": "./src/routing",
            "_reducks": "./src/reducks",
            "app" : './src/'
          }
        }
      ]
    ]
};
