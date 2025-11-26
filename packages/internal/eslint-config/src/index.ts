import type { Linter } from 'eslint';

import {
  ignores,
  javascript,
  typescript,
  jsonc,
  pnpm,
  perfectionist,
  turbo,
} from './configs';

type FlatConfig = Linter.Config;
type InternalFlatConfig = FlatConfig | FlatConfig[];

function defineConfig(config: FlatConfig[] = []): InternalFlatConfig[] {
  const configs: InternalFlatConfig[] = [
    ignores(),
    typescript(),
    javascript(),
    jsonc(),
    pnpm(),
    perfectionist(),
    turbo(),
    ...config,
  ];

  return configs.flat();
}

export { defineConfig };
