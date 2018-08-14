module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  plugins: ["json"],
  root: true,
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    semi: ["error", "always"]
  }
};
