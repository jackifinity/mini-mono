import { Linter } from 'eslint';

import {
  ignores,
  javascript,
  json,
  perfectionist,
  typescript,
} from './configs';

type FlatConfig = Linter.Config;
type InternalFlatConfig = FlatConfig | FlatConfig[];

function defineConfig(config: FlatConfig[] = []) {
  const configs: InternalFlatConfig[] = [
    ignores(),
    javascript(),
    perfectionist(),
    typescript(),
    json(),
    ...config,
  ];

  return configs.flat();
}

export { defineConfig };
