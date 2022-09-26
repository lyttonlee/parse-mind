/*
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-09-19 17:00:00
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-09-26 15:14:48
 * @FilePath: \mind-lib\src\main.ts
 * @Description:
 * */

import * as jszip from 'jszip';

interface XmindData {
  id: string;
  title: string;
  children?: {
    attached: Array<XmindData>;
  };
}

interface JsonDataSheet {
  id?: string;
  rootTopic?: XmindData;
  title?: string;
}

enum direction {
  'left',
  'right',
}

interface JsmindData {
  id?: string;
  topic?: string;
  direction?: direction;
  expanded?: boolean;
  children?: Array<JsmindData>;
}

const exts = ['xmind'];

/**
 * @description:
 * @param {string} fileContent
 * @return {*}
 */
function isXMind(fileContent: string): boolean {
  return fileContent.indexOf('content.json') !== -1;
}

let xmindFiles = ['manifest.json', 'content.json', 'metadata.json'];

function getContentJson(file: File): Promise<Array<JsonDataSheet>> {
  return new Promise(async (resolve, reject) => {
    try {
      const { files } = await jszip.loadAsync(file);
      // 仅解析 content.json
      let contentJson = await files[xmindFiles[1]].async('string');
      let resJson: Array<JsonDataSheet> = JSON.parse(contentJson);
      // console.log(resJson);
      resolve(resJson);
    } catch (error) {
      reject(error);
    }
  });
}

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const ext = file.name.split('.').pop();
    if (exts.indexOf(ext) === -1) {
      reject(new Error(`仅支持${exts.join(' ')}文件的解析！`));
    }
    const fd = new FileReader();
    fd.readAsText(file);
    fd.onloadend = function () {
      const text: string = fd.result as string;
      resolve(text);
    };
    fd.onerror = function () {
      reject(new Error('文件解析错误！'));
    };
  });
}

function fileContentToJson(fileContent: string) {
  // 判断传入的string 是否符合 xmind 格式
  let startIndex = fileContent.indexOf('content.json');
  console.log(startIndex);
  let endIndex = fileContent.indexOf('content.xml');
  console.log(endIndex);
  let jsonValue = fileContent.slice(startIndex, endIndex);
  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`仅支持${exts.join(' ')}文件的解析！`);
  }
  jsonValue = jsonValue.replace('content.json', '');
  let end = jsonValue.lastIndexOf(']');
  jsonValue = jsonValue.slice(0, end + 1);
  console.log(jsonValue);
  let resJson: Array<JsonDataSheet> = JSON.parse(jsonValue);
  console.log(resJson);
  return resJson;
}

function jsonToJsmindData(jsonData: Array<JsonDataSheet>) {
  // let res = {};
  let originData: XmindData = jsonData[0].rootTopic;
  function deep(data: XmindData): JsmindData {
    let res: JsmindData = {};
    if (data.children && data.children.attached.length > 0) {
      let children = data.children.attached.map((item) => {
        return deep(item);
      });
      res.children = children;
    }
    res.id = data.id;
    res.topic = data.title;
    return res;
  }
  return deep(originData);
}

/**
 * @description: xmind文件转化为 json 数据
 * @param {File} file 文件对象
 * @return {Promise<JsonDataSheet[]>} Promise<JsonDataSheet[]>
 */
export async function parseXmindFileToJson(
  file: File
): Promise<JsonDataSheet[]> {
  // const fileContent = await readFile(file);
  // return fileContentToJson(fileContent);
  const jsonData = await getContentJson(file);
  return jsonData;
}

/**
 * @description: xmind文件转化为 jsmind 可以直接渲染的数据
 * @param {File} file
 * @return {Promise} Promise
 */
export async function parseXindFileToJsmind(file: File) {
  // const fileContent = await readFile(file);
  // const jsonData = fileContentToJson(fileContent);
  const jsonData = await getContentJson(file);
  return jsonToJsmindData(jsonData);
}
