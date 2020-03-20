import Dexie from "dexie";
import { ITask } from "./task";

const DBName = "TodoDB";

class DataBase extends Dexie {
  public task: Dexie.Table<ITask, number>;

  constructor() {
    super(DBName);

    this.version(1).stores({
      task: "++id, title, date"
    });

    this.task = this.table("task");
  }
}

export const db = new DataBase();
