import { Linter } from 'eslint';

import {
  ignores,
  javascript,
  json,
  perfectionist,
  typescript,
} from './configs';

type FlatConfig = Linter.Config;
type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>;

function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
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
