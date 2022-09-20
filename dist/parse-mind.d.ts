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
declare enum direction {
    'left' = 0,
    'right' = 1
}
interface JsmindData {
    id?: string;
    topic?: string;
    direction?: direction;
    expanded?: boolean;
    children?: Array<JsmindData>;
}
/**
 * @description: xmind文件转化为 json 数据
 * @param {File} file 文件对象
 * @return {Promise<JsonDataSheet[]>} Promise<JsonDataSheet[]>
 */
declare function parseXmindFileToJson(file: File): Promise<JsonDataSheet[]>;
/**
 * @description: xmind文件转化为 jsmind 可以直接渲染的数据
 * @param {File} file
 * @return {Promise} Promise
 */
declare function parseXindFileToJsmind(file: File): Promise<JsmindData>;

export { parseXindFileToJsmind, parseXmindFileToJson };
