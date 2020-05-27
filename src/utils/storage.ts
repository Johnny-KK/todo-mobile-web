const storage = window.localStorage;

/**
 * 设置localStorage
 *
 * @param {String} key key
 * @param {Object} value value
 */
export function setStorage(key: string, value: any) {
  key !== undefined && storage.setItem(key, JSON.stringify(value));
}

/**
 * 获取localStorage
 *
 * @param {String} key key
 * @returns {Object} value
 */
export function getStorage(key: string) {
  return storage.getItem(key) === null
    ? null
    : JSON.parse(storage.getItem(key) as string);
}

/**
 * 删除localStorage
 *
 * @param {String} key key
 * @returns {Boolean} 删除之后是否可以取到值
 */
export function delStorage(key: string) {
  storage.removeItem(key);
  return getStorage(key) === null;
}

/**
 * 清空localStorage
 *
 * @returns {Boolean} 是否清空
 */
export function clearStorage() {
  storage.clear();
  return storage.length === 0;
}
