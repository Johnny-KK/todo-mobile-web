import { db } from "./index";
import moment from "moment";

/** 任务 */
export interface ITask {
  id?: number; // 主键
  title: string; // 任务标题
  content?: string; // 任务具体内容
  date: string; // 任务计划完成日期
  actTime?: string; // 任务实际完成时间
  state: number; // 任务状态 0待完成1已完成2已过期
  tomato?: number; // 任务小番茄数
  children?: Array<ITask>; // 子任务
}

/** 任务服务 */
export class TaskService {
  /** 新增任务 */
  async add(task: ITask): Promise<number> {
    return await db.task.add(task);
  }

  /** 根据id删除任务 */
  async del(id: number): Promise<void> {
    return await db.task.delete(id);
  }

  /** 根据id修改任务状态 */
  async changeState(id: number, state: number): Promise<number> {
    return await db.task.update(id, {
      state: state,
      actTime: state === 1 ? moment().format("YYYY-MM-DD HH:mm:ss") : ""
    });
  }

  /**
   * 查询任务列表
   */
  async query(date?: string): Promise<ITask[]> {
    const arr: ITask[] =
      date == undefined
        ? await db.task.toArray()
        : await db.task
            .where("date")
            .equals(date)
            .toArray();
    return arr.sort((a: ITask, b: ITask) => a.state - b.state);
  }
}
