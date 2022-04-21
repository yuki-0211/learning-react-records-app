module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  "rules": {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@alias/**",
            group: "parent",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      "typescript": {"alwaysTryTypes": true},
    },
  },
};