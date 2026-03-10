import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
// eslint.config.mjs  ← very basic version
import nextPlugin from '@next/eslint-plugin-next';

export default [...next, ...nextCoreWebVitals, ...nextTypescript, {
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
}, {
  ignores: ['.next/**', 'node_modules/**'],
}];