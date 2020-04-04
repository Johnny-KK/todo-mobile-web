import { ITask } from '@/core/entities/task';
import { ICollection } from '@/core/entities/collection';

/** 任务接口扩展: 收集箱详情 */
export interface ITaskD extends ITask {
  collectionD: ICollection;
}
