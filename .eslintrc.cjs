module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "eslint:recommended",
      "airbnb/hooks",
      "airbnb-typescript",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:import/recommended",
      "plugin:prettier/recommended",
  ],
  // Specifying Parser
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module",
      "tsconfigRootDir": ".",
      "project": [
          "./tsconfig.json"
      ]
  },
  // Configuring third-party plugins
  "plugins": [
      "react",
      "@typescript-eslint",
      "prettier"
  ],
  // Resolve imports
  "settings": {
      "import/resolver": {
          "typescript": {
              "project": "./tsconfig.json"
          }
      },
      "react": {
          "version": "18.x"
      }
  },
  "rules": {
      "linebreak-style": "off",
      // Configure prettier
      "prettier/prettier": [
          "error"],
      // Disallow the `any` type.
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-types": [
          "error",
          {
              "extendDefaults": true,
              "types": {
                  "{}": false
              }
          }
      ],
      "react-hooks/exhaustive-deps": "off",
      // Enforce the use of the shorthand syntax.
      "object-shorthand": "error",
      "no-console": "warn",
      "import/no-unresolved": "warn",
      "import/default": "off",
      "import/extensions": "warn"
  }
}
