import { db } from '@/core/services/database/index';
import { ICommon } from '@/core/entities/common';

/** 默认常用信息 */
const DEFAULT_COMMON = {
  key: 'common',
  lastHandle: null
};

export class CommonService {
  /** 新增默认常用信息 */
  public async createDefault(): Promise<string> {
    return await db.common.add(DEFAULT_COMMON);
  }

  /** 获取常用信息 */
  public async query(): Promise<ICommon | undefined> {
    return await db.common.get(DEFAULT_COMMON.key);
  }
}
