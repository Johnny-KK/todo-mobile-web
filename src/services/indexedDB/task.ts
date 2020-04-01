import { db } from './index';
import moment from 'moment';

/** 任务 */
export interface ITask {
  id?: number; // 主键
  title: string; // 任务标题
  content: string; // 任务具体内容
  planDate: number | null; // 任务计划完成日期当天开始时间戳
  actualTime: number | null; // 任务实际完成时间戳
  status: TaskStatus; // 任务状态
  tomato: number; // 任务小番茄数
  children?: Array<ITask>; // 子任务
}

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

/** 任务服务 */
export class TaskService {
  /** 初始化获取新任务 */
  initTask(): ITask {
    return {
      title: '',
      content: '',
      planDate: moment()
        .startOf('date')
        .valueOf(),
      actualTime: null,
      status: TaskStatus.待完成,
      tomato: 0
    };
  }

  /** 新增任务 */
  async add(task: ITask): Promise<number> {
    return await db.task.add(task);
  }

  /** 根据id删除任务 */
  async del(id: number): Promise<void> {
    return await db.task.delete(id);
  }

  /** 根据id修改任务状态 */
  async changeState(id: number, status: TaskStatus): Promise<number> {
    return await db.task.update(id, {
      status: status,
      actualTime: status === TaskStatus.已完成 ? new Date().valueOf() : null
    });
  }

  /**
   * 查询任务列表
   *
   * @param planDate{number | undefined} 任务计划完成时间当日开始时间戳
   */
  async query(planDate?: number): Promise<ITask[]> {
    const arr: ITask[] =
      planDate == undefined
        ? await db.task.toArray()
        : await db.task
            .where('planDate')
            .equals(planDate)
            .toArray();
    return this.sortTaskList(arr);
  }

  /** 查询最近七天的任务列表 */
  async queryLast7Days(): Promise<ITask[]> {
    return await db.task
      .where('planDate')
      .between(
        moment()
          .subtract(6, 'days')
          .valueOf(),
        moment()
          .startOf('date')
          .valueOf()
      )
      .toArray();
  }

  /** 处理任务 */
  async handleTask(startDate: number, endDate: number) {
    db.task
      .where('planTime')
      .between(startDate, endDate)
      .modify((task: ITask) => (task.status = TaskStatus.已超时));
  }

  /** 通用的任务查询 */
  async queryList() {
    // 考虑时间
  }

  /** 更新数据库任务数据 -- 原数据全部删除 */
  async updateAllDate(tasks: ITask[]) {
    return db.transaction('rw', db.task, () => {
      db.task.clear();
      db.task.bulkAdd(tasks);
    });
  }

  /** 任务排序 */
  sortTaskList(taskList: ITask[]): ITask[] {
    return taskList.sort((a: ITask, b: ITask) => a.status - b.status);
  }
}
