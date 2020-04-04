<template>
  <div class="gc-layout-main">
    <div class="gc-layout-scroll">
      <van-cell-group>
        <van-cell
          v-for="item in menuList"
          :key="item.title"
          :title="item.title"
          is-link
          @click="handle(item.handle)"
        >
          <span slot="icon"><gc-icon :name="item.icon"></gc-icon></span>
        </van-cell>
      </van-cell-group>
    </div>

    <file-list v-if="showImport" @hidden="showImport = false"></file-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Cell, CellGroup, Toast } from 'vant';
import CFileList from './widget/fileList.vue';

import taskInteractor from '@/core/interactors/taskInteractor';

Vue.use(Cell).use(CellGroup);

@Component({ components: { 'file-list': CFileList } })
export default class CMine extends Vue {
  /** 操作菜单 */
  menuList = [
    { title: '账户与安全', icon: 'safe' },
    { title: '数据与同步', icon: 'cloud-sync' },
    { title: '数据导出', icon: 'export', handle: this.exportData },
    { title: '数据导入', icon: 'import', handle: this.importData },
    { title: '主题皮肤', icon: 'paint-bucket' },
    { title: '隐私密码锁', icon: 'lock' }
  ];

  /** 是否显示导入数据组件 */
  showImport = false;

  /** 处理点击事件 */
  handle(handle: Function | undefined) {
    if (!handle) {
      return false;
    }
    handle();
  }

  /** 导出数据到设备download目录 */
  async exportData() {
    taskInteractor
      .writeBackupToLocalDevice()
      .then(success => Toast(success ? '导出成功' : '导出失败'));
  }

  /** 导入数据 */
  importData() {
    this.showImport = true;
  }
}
</script>

<style lang="scss" scoped>
.van-cell > span {
  line-height: 24px;
  margin-right: 10px;
}
</style>
