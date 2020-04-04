import { db } from '@/core/services/database/index';
import { ICollection } from '@/core/entities/collection';

/** 默认收集箱 */
export const DEFAULT_COLLECTION = {
  id: -1,
  name: '未分类',
  color: '#000',
  order: -1
};

export class CollectionService {
  /** 新增初始默认收集箱 */
  public async createDeafult(): Promise<number> {
    return await db.collection.add(DEFAULT_COLLECTION);
  }

  /** 新增收集箱 */
  public async create(collection: ICollection): Promise<number> {
    return await db.collection.add(collection);
  }

  /** 获取收集箱列表 */
  public async queryAllList(): Promise<ICollection[]> {
    return await db.collection.toArray();
  }

  /** 根据id查询收集箱 */
  public async queryById(id: number): Promise<ICollection | undefined> {
    return await db.collection.get(id);
  }
}
