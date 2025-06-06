import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: './dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    onwarn(warning, warn) {
      if (warning.code === 'CIRCULAR_DEPENDENCY' && 
          (warning.message.includes('@nivo') || warning.message.includes('d3-interpolate'))) {
        return;
      }
      warn(warning);
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**', '**/*.test.ts', '**/*.test.tsx'],
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'tailwindcss'],
  },
];

export default config;