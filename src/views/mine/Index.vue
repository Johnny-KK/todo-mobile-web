<template>
  <div class="gc-layout-main">
    <div class="gc-layout-scroll">
      <van-cell-group>
        <van-cell title="账户与安全" is-link>
          <span slot="icon"><gc-icon name="safe"></gc-icon></span>
        </van-cell>

        <van-cell title="数据与同步" is-link>
          <span slot="icon"><gc-icon name="cloud-sync"></gc-icon></span>
        </van-cell>

        <van-cell title="数据导出" is-link @click="exportData">
          <span slot="icon"><gc-icon name="export"></gc-icon></span>
        </van-cell>

        <van-cell title="数据导入" is-link @click="showImport = true">
          <span slot="icon"><gc-icon name="import"></gc-icon></span>
        </van-cell>

        <van-cell title="主题皮肤" is-link>
          <span slot="icon"><gc-icon name="paint-bucket"></gc-icon></span>
        </van-cell>

        <van-cell title="隐私密码锁" is-link>
          <span slot="icon"><gc-icon name="lock"></gc-icon></span>
        </van-cell>
      </van-cell-group>
    </div>

    <file-list v-if="showImport" @hidden="showImport = false"></file-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Cell, CellGroup, Toast } from 'vant';
import { ITask, TaskService } from '@/services/indexedDB/task';
import { writeFileToLocalDevice } from '@/services/native/file';
import CFileList from './widget/fileList.vue';

Vue.use(Cell).use(CellGroup);

interface Backup {
  data: { taskList: ITask[] }; // 备份数据
  time: number; // 备份时间戳
}

@Component({ components: { 'file-list': CFileList } })
export default class Mine extends Vue {
  taskService = new TaskService();

  /** 是否显示导入数据组件 */
  showImport = false;

  /** 导出数据到设备download目录 */
  async exportData() {
    const arr: ITask[] = await this.taskService.query();
    const result: Backup = {
      data: { taskList: arr },
      time: new Date().valueOf()
    };
    writeFileToLocalDevice(JSON.stringify(result)).then((success: boolean) =>
      Toast(success ? '导出成功' : '导出失败')
    );
  }
}
</script>

<style lang="scss" scoped>
.van-cell > span {
  line-height: 24px;
  margin-right: 10px;
}
</style>
