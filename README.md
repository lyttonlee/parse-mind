<!--
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-09-20 14:20:36
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-09-20 14:23:45
 * @FilePath: \mind-lib\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 一个可以解析 xmind 文件为 json 的工具

### install

```
npm i parse-mind
```

### use

```
import { parseXmindFileToJson } from 'parse-mind'

const jsonData = await parseXmindFileToJson(file: File)
```
