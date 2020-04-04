import Dexie from 'dexie';
import { ITask } from '@/core/entities/task';
import { ICollection } from '@/core/entities/collection';
import { ICommon } from '@/core/entities/common';

const DBName = 'TodoDB';

class DataBase extends Dexie {
  public task: Dexie.Table<ITask, number>;
  public collection: Dexie.Table<ICollection, number>;
  public common: Dexie.Table<ICommon, string>;

  constructor() {
    super(DBName);

    this.version(1).stores({
      task: '++id, title, planDate',
      common: 'key',
      collection: '++id'
    });

    this.task = this.table('task');
    this.collection = this.table('collection');
    this.common = this.table('common');
  }
}

export const db = new DataBase();
