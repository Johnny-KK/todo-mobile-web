import { db } from './index';

export interface ICommon {
  key: string; // 固定值common，方便查询
  userName?: string;
  token?: string;
  device?: string;
  lastHandle: number | null; // 上次处理任务时间戳
}

export class CommonService {
  /** 新增数据 */
  async add(): Promise<string> {
    const common: ICommon = {
      key: 'common',
      lastHandle: null
    };
    return await db.common.add(common);
  }

  /** 获取数据 如没有数据则新增并返回数据 */
  async get(): Promise<ICommon> {
    let common = await db.common.get('common');
    if (common === undefined) {
      await this.add();
      common = await db.common.get('common');
    }
    return common as ICommon;
  }

  /** 更新上次处理时间 */
  async updateLastHandle(): Promise<ICommon> {
    await db.common.update('common', {
      lastHandle: new Date().valueOf()
    });
    return this.get();
  }
}
