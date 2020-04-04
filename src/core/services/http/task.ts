import axios from 'axios';

/** 获取本地备份文件 */
export function queryLocalFile<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .get<T>(url)
      .then(data => resolve(data.data))
      .catch(() => reject(false));
  });
}
