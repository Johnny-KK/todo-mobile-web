import Dexie from 'dexie';
import { ITask } from './task';
import { ICommon } from './common';

const DBName = 'TodoDB';

class DataBase extends Dexie {
  public task: Dexie.Table<ITask, number>;
  public common: Dexie.Table<ICommon, string>;

  constructor() {
    super(DBName);

    this.version(1).stores({
      task: '++id, title, planDate',
      common: 'key'
    });

    this.task = this.table('task');
    this.common = this.table('common');
  }
}

export const db = new DataBase();
