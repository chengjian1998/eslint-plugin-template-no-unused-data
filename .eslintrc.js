
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:template-no-unused-data/property",
  ],
  plugins: ["template-no-unused-data"],  // 引用当前组件
};
