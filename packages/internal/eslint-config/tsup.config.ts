import { mergeConfig } from '@workspace/tsup-config';

export default mergeConfig({
  entry: ['./src/index.ts'],
  sourcemap: false,
});
