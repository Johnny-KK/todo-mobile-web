import { ITask } from '@/core/entities/task';
import { ICollection } from '@/core/entities/collection';
import { ICommon } from '@/core/entities/common';

export interface IBackup {
  time: number; // 备份时间戳
  data: IBackupData; // 备份数据
}

interface IBackupData {
  taskList: ITask[];
  collectionList: ICollection[];
  common: ICommon;
}
