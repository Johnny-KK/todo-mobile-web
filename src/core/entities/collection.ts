/** 任务收集箱 */
export interface ICollection {
  id?: number; // 主键
  name: string; // 收集箱名称
  color: string; // 收集箱颜色
  order: number; // 收集箱排序
}
