/*
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-09-19 16:52:59
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-09-20 13:53:09
 * @FilePath: \mind-lib\rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

const config = defineConfig([
  {
    input: './src/main.ts',
    output: [
      {
        file: './dist/parse-mind.esm.js',
        format: 'module',
      },
      // {
      //   file: './dist/parse-mind.cjs.js',
      //   format: 'cjs',
      // },
      {
        file: './dist/parse-mind.umd.js',
        format: 'umd',
        name: 'parse-mind',
      },
    ],
    plugins: [
      ts(),
      terser({
        compress: {
          drop_console: true,
        },
      }),
    ],
  },
  {
    input: './src/main.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/parse-mind.d.ts',
    },
  },
]);
export default config;
