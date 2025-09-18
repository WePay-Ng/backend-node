import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import run from '@rollup/plugin-run';

export default {
  input: 'src/server.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: './src' },
        { find: '@modules', replacement: './src/modules' },
        { find: '@utils', replacement: './src/utils' },
      ],
    }),
    resolve({ preferBuiltins: true }),
    commonjs(),
    json(),
    typescript({ tsconfig: './tsconfig.json' }),
    run(),
  ],
  external: [],
};
