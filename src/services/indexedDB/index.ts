import Dexie from "dexie";
import { ITask } from "./task";
import { IUser } from "./user";

const DBName = "TodoDB";

class DataBase extends Dexie {
  public task: Dexie.Table<ITask, number>;
  public user: Dexie.Table<IUser, string>;

  constructor() {
    super(DBName);

    this.version(1).stores({
      task: "++id, title, planDate",
      user: "userName"
    });

    this.task = this.table("task");
    this.user = this.table("user");
  }
}

export const db = new DataBase();
