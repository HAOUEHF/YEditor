import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tseslint
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      // 在这里添加自定义的规则，例如：
      'no-console': 'warn',
      'no-debugger': 'warn'
    },
  },
  pluginJs.configs.recommended
];
