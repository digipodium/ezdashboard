import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import babelPresetReact from "@babel/preset-react";
// import autoprefixer from "autoprefixer";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import tailwindConfig from "./tailwind.config.js";
import packageJson from "./package.json";
// const tailwindConfig = require('./tailwind.config.js');
import css from "rollup-plugin-import-css";

// const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        extract: true,
        plugins: [tailwindcss(tailwindConfig)]
      }),
      css(), // Use default options
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        extract: true,
        plugins: [tailwindcss(tailwindConfig)]
      }),
      dts.default(), babel({
      presets: [babelPresetReact], // Add the React preset for Babel
      exclude: "node_modules/**", // Exclude node_modules from transpilation
    })],
  },
];