import { CommonService } from '@/core/services/database/commonService';
import { ICommon } from '@/core/entities/common';

class CommonInteractor {
  public static getInstance() {
    return this._instance;
  }

  private static _instance = new CommonInteractor(new CommonService());

  constructor(private _commonService: CommonService) {}

  /** 获取常用信息 */
  public async getCommon(): Promise<ICommon> {
    const common = await this._commonService.query();
    if (common === undefined) {
      this._commonService.createDefault();
    }
    return (await this._commonService.query()) as ICommon;
  }
}

export default CommonInteractor.getInstance();
