<template>
  <van-overlay :show="true" :z-index="2" @click="$emit('hidden')">
    <div class="file-list-contain">
      <van-cell-group>
        <van-cell
          v-for="file in fileList"
          :key="file"
          clickable
          @click="importData(file)"
          >{{ file }}</van-cell
        >
      </van-cell-group>
    </div>
  </van-overlay>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Overlay, CellGroup, Cell, Toast } from 'vant';

import taskInteractor from '@/core/interactors/taskInteractor';

Vue.use(Overlay)
  .use(CellGroup)
  .use(Cell)
  .use(Toast);

@Component
export default class CFileList extends Vue {
  /** download文件夹下json文件列表 */
  fileList: string[] = [];

  mounted() {
    this.queryFileList();
  }

  /** 导入数据 */
  async importData(fileName: string) {
    taskInteractor
      .importBackupFromLocalDevice(fileName)
      .then(success => Toast(success ? '数据导入成功' : '数据导入失败'));
  }

  /** 获取设备download目录下json文件名列表 */
  queryFileList() {
    taskInteractor
      .queryJsonFromLocalDevice()
      .then((files: string[]) => {
        this.fileList = files;
      })
      .catch(() => Toast('文件读取失败'));
  }
}
</script>

<style lang="scss" scoped>
.file-list-contain {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background-color: $c-white;
  overflow-y: scroll;
}
</style>
