/** app常用信息 */
export interface ICommon {
  key: string; // 固定值common，方便查询
  userName?: string; // 登录用户名
  token?: string; // token
  device?: string; // 当前设备编码
  lastHandle: number | null; // 上次处理任务时间戳
  homeTaskMode: string; // 首页任务展示形式 calendar/lastThree
}
