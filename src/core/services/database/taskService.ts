import { db } from './index';
import { ITask, TaskStatus } from '@/core/entities/task';
import { ICollection } from '@/core/entities/collection';

export class TaskService {
  /** 新增任务 */
  public async create(task: ITask): Promise<number> {
    return await db.task.add(task);
  }

  /** 删除任务 */
  public async del(id: number): Promise<void> {
    return await db.task.delete(id);
  }

  /** 获取任务 */
  public async query(id: number): Promise<ITask | undefined> {
    return await db.task.get(id);
  }

  /** 获取全部任务列表 */
  public async queryAllList(): Promise<ITask[]> {
    return await db.task.toArray();
  }

  /** 根据计划完成日期获取任务列表 */
  public async queryListByPlanDate(planDate: number): Promise<ITask[]> {
    return await db.task
      .where('planDate')
      .equals(planDate)
      .toArray();
  }

  /** 更新任务状态值 */
  public async updateState(id: number, status: TaskStatus): Promise<number> {
    return await db.task.update(id, {
      status: status,
      actualTime: status === TaskStatus.已完成 ? new Date().valueOf() : null
    });
  }

  /** 更新数据库任务数据 -- 原数据全部删除 */
  public async updateAllDate(taskList: ITask[], collectionList: ICollection[]) {
    return db.transaction('rw', db.task, db.collection, () => {
      db.task.clear();
      db.task.bulkAdd(taskList);
      db.collection.clear();
      db.collection.bulkAdd(collectionList);
    });
  }
}
