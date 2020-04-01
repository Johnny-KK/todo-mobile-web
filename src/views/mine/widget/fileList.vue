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
import { readLocalFileSystem } from '@/services/native/file';
import axios from 'axios';
import { ITask, TaskService } from '@/services/indexedDB/task';

Vue.use(Overlay, CellGroup, Cell, Toast);

interface Backup {
  data: { taskList: ITask[] }; // 备份数据
  time: number; // 备份时间戳
}

@Component
export default class CFileList extends Vue {
  taskService = new TaskService();
  /** download文件夹下json文件列表 */
  fileList: string[] = [];

  mounted() {
    this.queryFileList();
  }

  /** 导入数据 */
  async importData(fileName: string) {
    try {
      const backup: Backup = await this.queryFile(fileName);
      if (backup.data.taskList.length < 1) {
        Toast('无数据需要导入');
        return;
      }
      this.taskService
        .updateAllDate(backup.data.taskList)
        .then(() => Toast('数据导入成功'))
        .catch(() => Toast('数据导入失败'));
    } catch {
      Toast('文件读取失败!');
    }
  }

  /** 获取设备download目录下json文件名列表 */
  queryFileList() {
    readLocalFileSystem()
      .then((files: string[]) => {
        this.fileList = files;
      })
      .catch(() => Toast('文件读取失败'));
  }

  /** 根据文件名查询本地文件内容 */
  queryFile(fileName: string): Promise<Backup> {
    return new Promise((resolve, reject) => {
      axios
        .get<Backup>(`/storage/emulated/0/Download/${fileName}`)
        .then(data => resolve(data.data))
        .catch(() => reject(false));
    });
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
