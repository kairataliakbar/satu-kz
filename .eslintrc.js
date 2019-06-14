module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  }
};
