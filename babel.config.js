module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
            moduleName: "@env",
            path: ".env",
        },
      ],
      ['react-native-reanimated/plugin'],
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module-resolver", {
        "alias": {
          "@Navigation": "./src/navigation",
          "@Components": "./src/components",
          "@Screens": "./src/screens",
          "@Stores": "./src/stores",
          "@Assets": "./assets",
          "@Utils": "./src/utils",
          "@Constant": "./src/constants",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};
