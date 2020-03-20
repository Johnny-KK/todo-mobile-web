<template>
  <div class="gc-layout-main">
    <van-cell-group>
      <van-cell title="账户与安全" is-link>
        <span slot="icon">
          <gc-icon name="safe"></gc-icon>
        </span>
      </van-cell>

      <van-cell title="数据与同步" is-link>
        <span slot="icon">
          <gc-icon name="cloud-sync"></gc-icon>
        </span>
      </van-cell>

      <van-cell title="数据导出" is-link @click="exportData">
        <span slot="icon">
          <gc-icon name="export"></gc-icon>
        </span>
      </van-cell>

      <van-cell title="主题皮肤" is-link>
        <span slot="icon">
          <gc-icon name="paint-bucket"></gc-icon>
        </span>
      </van-cell>

      <van-cell title="隐私密码锁" is-link>
        <span slot="icon">
          <gc-icon name="lock"></gc-icon>
        </span>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Cell, CellGroup } from "vant";
import { ITask, TaskService } from "@/services/indexedDB/task";

Vue.use(Cell).use(CellGroup);

@Component
export default class Mine extends Vue {
  taskService = new TaskService();

  /** 导出数据 */
  async exportData() {
    const arr: ITask[] = await this.taskService.query();
    console.log(arr);
    return arr;
  }
}
</script>

<style lang="scss" scoped>
.van-cell > span {
  line-height: 24px;
  margin-right: 10px;
}
</style>
