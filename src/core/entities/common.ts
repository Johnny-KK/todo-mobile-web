/** app常用信息 */
export interface ICommon {
  key: string; // 固定值common，方便查询
  userName?: string; // 登录用户名
  token?: string;
  device?: string;
  lastHandle: number | null; // 上次处理任务时间戳
}
