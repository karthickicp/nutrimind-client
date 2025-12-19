import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier integration
      "prettier/prettier": "warn",

      // Console warnings
      "no-console": ["error", {
            "allow": [
                "warn",
                "error",
                "log"
            ]
        }],

      // Turn off 'any' warning
      "@typescript-eslint/no-explicit-any": "off",

      // Import ordering rules
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // External packages (react, next, etc.)
            "internal", // Internal aliases (@/)
            ["parent", "sibling"], // Parent and sibling imports
            "index", // Index imports
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Additional formatting rules
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],

      // TypeScript specific
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // React specific
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": "warn",
    },
  },
  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "*.config.js",
    "*.config.mjs",
  ]),
]);

export default eslintConfig;
