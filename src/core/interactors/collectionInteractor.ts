import {
  CollectionService,
  DEFAULT_COLLECTION
} from '@/core/services/database/collectionService';
import { ICollection } from '@/core/entities/collection';

class CollectionInteractor {
  public static getInstance() {
    return this._instance;
  }

  private static _instance = new CollectionInteractor(new CollectionService());

  constructor(private _collectionService: CollectionService) {}

  /** 初始化获取收集箱实体 */
  public initCollection(): ICollection {
    return {
      name: '',
      color: DEFAULT_COLLECTION.color,
      order: 1
    };
  }

  /** 收集箱排序 */
  private compareFn(a: ICollection, b: ICollection): number {
    return b.order - a.order;
  }

  /** 查询收集箱列表 */
  public async queryCollectionList(): Promise<ICollection[]> {
    const list = await this._collectionService.queryAllList();
    // 如果收集箱为空则初始化收集箱
    if (list.length === 0) {
      await this._collectionService.createDeafult();
    }
    return (await this._collectionService.queryAllList()).sort(this.compareFn);
  }

  /** 新增收集箱 */
  public async addCollection(collection: ICollection): Promise<number> {
    if (collection.id !== undefined) {
      return Promise.reject('id is not allowed');
    }
    const list = await this.queryCollectionList();
    const isExit = list.some(x => x.name === collection.name);
    if (isExit) {
      return Promise.reject('收集箱已经存在');
    }
    const maxOrder = list.sort((a, b) => b.order - a.order)[0].order;
    collection.order = maxOrder + 1;
    return this._collectionService.create(collection);
  }

  // TODO 修改收集箱
  //   public async edit() {}

  // TODO 删除收集箱 删除后该收集箱下的任务全部移到默认收集箱下
}

export default CollectionInteractor.getInstance();
