/* eslint-ignore */
module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "json",
    "prettier"
  ],
  root: true,
  rules: {
    "prettier/prettier": "error",

    "eqeqeq": "error",
    "no-console": "warn",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    "semi": ["error", "always"]
  }
};
