module.exports = {
  env: {
    browser: true
  },
  parser: "babel-eslint",
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ],
    "react/prop-types": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "linebreak-style": 0 // disables warnings when using non-unix line endings (https://eslint.org/docs/rules/linebreak-style)
  }
};
