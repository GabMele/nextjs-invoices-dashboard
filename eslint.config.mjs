// import next from "eslint-config-next";
// import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
// import nextTypescript from "eslint-config-next/typescript";
// // eslint.config.mjs  ← very basic version
// import nextPlugin from '@next/eslint-plugin-next';

// export default [...next, ...nextCoreWebVitals, ...nextTypescript, {
//   plugins: {
//     '@next/next': nextPlugin,
//   },
//   rules: {
//     ...nextPlugin.configs.recommended.rules,
//     ...nextPlugin.configs['core-web-vitals'].rules,
//   },
// }, {
//   ignores: ['.next/**', 'node_modules/**'],
// }];



/*
import nextConfig from "eslint-config-next";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  // Load Next.js base configurations
  // This already includes Core Web Vitals, React, and jsx-a11y (Accessibility)
  ...nextConfig,
  
  // Add support for Tailwind CSS linting
  // This ensures your utility classes are valid and optimized
  ...tailwind.configs["flat/recommended"],

  {
    // Custom rules or overrides
    rules: {
      // You can add specific project rules here if needed
    },
  },
  
  {
    // Directory exclusions
    // Prevents ESLint from scanning compiled files and dependencies
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**'],
  }
];
*/


/*
import pluginNext from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  ...tailwind.configs['flat/recommended'],
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**'],
  },
];
*/


/*
// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,

  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Tailwind CSS
  ...tailwind.configs['flat/recommended'],

  {
    // Ignora cartelle che non servono
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**'],
  },
];
*/



/*
// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,

  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  ...tailwind.configs['flat/recommended'],

  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      '*.config.js',     // ignora temporaneamente i file di config
    ],
  },
];
*/



/*
// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,

  // Next.js + Core Web Vitals
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // TypeScript ESLint (Recommended)
  ...tseslint.configs.recommended,

  // Tailwind
  ...tailwind.configs['flat/recommended'],

  {
    rules: {
      // Regole React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Next.js
      '@next/next/no-html-link-for-pages': 'error',
    },
  },

  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      '.vscode/**',
      'public/**',
    ],
  },
];
*/


/*
// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,

  // Next.js + Core Web Vitals
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // TypeScript
  ...tseslint.configs.recommended,

  // React Hooks
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Tailwind
  ...tailwind.configs['flat/recommended'],

  {
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
    },
  },

  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      '.vscode/**',
      'public/**',
    ],
  },
];
*/



/*  
// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,

  // Next.js
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // TypeScript
  ...tseslint.configs.recommended,

  // React Hooks
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Tailwind (con fix per il crash)
  {
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      ...tailwind.configs['flat/recommended'].rules,
      'tailwindcss/classnames-order': 'off',        // ← disabilitata perché crasha
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
    },
  },

  {
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
    },
  },

  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      '.vscode/**',
      'public/**',
    ],
  },
];
*/


/*
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  
  // This brings in the accessibility (jsx-a11y) and vitals from the tutorial
  ...compat.extends('next/core-web-vitals'),

  // Your existing Tailwind config
  {
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      ...tailwind.configs['flat/recommended'].rules,
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
    },
  },

  // Fix for the config files errors
  {
    files: ["postcss.config.js", "tailwind.config.ts"],
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'public/**'],
  },
];
*/



import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "public/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
      tailwindcss: tailwind,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      ...tailwind.configs['flat/recommended'].rules,
      // Custom overrides
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
  // Config file fixes
  {
    files: ["postcss.config.js", "tailwind.config.ts"],
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }
);