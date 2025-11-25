import type { Linter } from 'eslint';

import pluginPnpm from 'eslint-plugin-pnpm';
import jsoncParser from 'jsonc-eslint-parser';
import yamlParser from 'yaml-eslint-parser';

export function pnpm(): Array<Linter.Config> {
  return [
    {
      files: ['**/package.json'],
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'pnpm/package-json',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/json-enforce-catalog': 'error',
        'pnpm/json-prefer-workspace-settings': 'error',
        'pnpm/json-valid-catalog': 'error',
      },
    },
    {
      files: ['pnpm-workspace.yaml'],
      languageOptions: {
        parser: yamlParser,
      },
      name: 'pnpm/pnpm-workspace-yaml',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/yaml-no-duplicate-catalog-item': 'error',
        'pnpm/yaml-no-unused-catalog-item': 'error',
      },
    },
  ];
}
