import moment from 'moment';
import { TaskService } from '@/core/services/database/taskService';
import { ITask, TaskStatus } from '@/core/entities/task';
import { ITaskD } from '@/core/types/taskD';
import { FileService } from '@/core/services/native/fileService';
import { IBackup } from '@/core/types/backup';
import {
  CollectionService,
  DEFAULT_COLLECTION
} from '@/core/services/database/collectionService';
import { ICollection } from '@/core/entities/collection';
import { queryLocalFile } from '@/core/services/http/task';
import commonInteractor from '@/core/interactors/commonInteractor';

class TaskInteractor {
  public static getInstance() {
    return this._instance;
  }

  private static _instance = new TaskInteractor(
    new TaskService(),
    new CollectionService(),
    new FileService()
  );

  constructor(
    private _taskService: TaskService,
    private _collectionService: CollectionService,
    private _fileService: FileService
  ) {}

  /** task转taskD */
  private transTaskToTaskD(task: ITask, collectionList: ICollection[]): ITaskD {
    const result: ITaskD = Object.assign({}, task) as ITaskD;
    result.collectionD =
      collectionList.find(x => x.id === result.collection) ||
      DEFAULT_COLLECTION;
    return result;
  }

  /** taskD转task */
  private transTaskDToTask(taskD: ITaskD): ITask {
    const result = Object.assign({}, taskD);
    delete result.collectionD;
    return result;
  }

  /** 任务列表排序 */
  private compareFn(a: ITaskD, b: ITaskD): number {
    return a.status - b.status;
  }

  /** 初始化获取任务实体 */
  public initTask(): ITaskD {
    return {
      title: '',
      content: '',
      planDate: moment()
        .startOf('date')
        .valueOf(),
      actualTime: null,
      status: TaskStatus.待完成,
      tomato: 0,
      collection: DEFAULT_COLLECTION.id,
      collectionD: DEFAULT_COLLECTION
    };
  }

  /** 新增任务 */
  public async addTask(task: ITaskD): Promise<number> {
    if (task.id !== undefined) {
      return Promise.reject('id is not allowed');
    }
    return await this._taskService.create(this.transTaskDToTask(task));
  }

  /** 删除任务 */
  public async delTask(id: number): Promise<void> {
    return this._taskService.del(id);
  }

  /**
   * 查询任务列表
   *
   * @param{number} planDate 任务计划完成日期
   */
  public async queryTaskList(planDate?: number): Promise<ITaskD[]> {
    const collectionList = await this._collectionService.queryAllList();
    if (planDate !== undefined) {
      return (await this._taskService.queryListByPlanDate(planDate))
        .map(x => this.transTaskToTaskD(x, collectionList))
        .sort(this.compareFn);
    }
    return (await this._taskService.queryAllList())
      .map(x => this.transTaskToTaskD(x, collectionList))
      .sort(this.compareFn);
  }

  /** 更改任务状态 */
  public async updateTaskStatus(id: number, status: TaskStatus) {
    return await this._taskService.updateState(id, status);
  }

  /** 将备份数据写入本地 */
  public async writeBackupToLocalDevice(): Promise<boolean> {
    const filePath = '/storage/emulated/0/Download/';
    const fileName = `todo_backup_${new Date().valueOf()}.json`;
    try {
      const result: IBackup = {
        time: new Date().valueOf(),
        data: {
          taskList: await this._taskService.queryAllList(),
          collectionList: await this._collectionService.queryAllList(),
          common: await commonInteractor.getCommon()
        }
      };
      const entry = await this._fileService.resolveFileSystem(filePath);
      const file = await this._fileService.getFile(entry, fileName);
      await this._fileService.writeFile(file, JSON.stringify(result));
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  }

  /** 获取download目录下json文件列表 */
  public async queryJsonFromLocalDevice(): Promise<string[]> {
    const filePath = '/storage/emulated/0/Download/';
    try {
      const entry = await this._fileService.resolveFileSystem(filePath);
      const entries = await this._fileService.readFileListFromDirectory(entry);
      return Promise.resolve(
        entries
          .filter(entry => entry.isFile && entry.name.indexOf('.json') > -1)
          .map(x => x.name)
      );
    } catch {
      return Promise.reject(false);
    }
  }

  /** 导入指定备份文件数据 原数据全部清空 */
  public async importBackupFromLocalDevice(fileName: string): Promise<boolean> {
    const url = `/storage/emulated/0/Download/${fileName}`;
    try {
      const data: IBackup = await queryLocalFile<IBackup>(url);
      await this._taskService.updateAllDate(
        data.data.taskList,
        data.data.collectionList,
        data.data.common
      );
      return Promise.resolve(true);
    } catch {
      return Promise.resolve(false);
    }
  }
}

export default TaskInteractor.getInstance();
