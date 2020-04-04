/** 任务状态 同时用作排序依据 */
export enum TaskStatus {
  待完成,
  已延期,
  已完成,
  延期已完成,
  已超时,
  已取消,
  未指定
}

/** 任务 */
export interface ITask {
  id?: number; // 主键
  title: string; // 任务标题
  content: string; // 任务具体内容
  planDate: number | null; // 任务计划完成日期当天开始时间戳
  actualTime: number | null; // 任务实际完成时间戳
  status: TaskStatus; // 任务状态
  tomato: number; // 任务小番茄数
  collection: number; // 任务所属收集箱
  children?: Array<ITask>; // 子任务
}
