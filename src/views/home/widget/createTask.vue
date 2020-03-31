<template>
  <van-action-sheet v-model="show">
    <van-field v-model="task.title" placeholder="准备做什么" />

    <van-field v-model="task.content" placeholder="添加描述" />

    <!-- 任务日期 -->
    <van-cell>
      <van-button
        type="default"
        size="mini"
        round
        @click="showCalendar = true"
        :class="{ 'date-selected': task.planDate !== null }"
        >{{ task.planDate | timeFilter }}</van-button
      >
      <van-button
        type="default"
        size="mini"
        round
        :class="{ 'date-selected': task.planDate === null }"
        @click="setDate('none')"
        >暂无日期</van-button
      >
    </van-cell>
    <van-calendar v-model="showCalendar" @confirm="setDate" />

    <!-- 小番茄 -->
    <van-cell class="tomato-contain">
      <gc-icon
        v-for="n in 5"
        :key="n"
        name="tomato"
        @click="setTomato(n)"
        :class="{ 'tomato-selected': n <= task.tomato }"
      ></gc-icon>

      <gc-icon name="close" @click="task.tomato = 0"></gc-icon>
    </van-cell>

    <div class="submit-btn">
      <van-button type="primary" round @click="submit">确定</van-button>
    </div>

    <!-- <van-field v-model="task.name" placeholder="添加子任务">
      <gc-icon slot="left-icon" name="partition"></gc-icon>
    </van-field> -->

    <!-- <van-field v-model="task.name" placeholder="设置重复">
      <gc-icon slot="left-icon" name="repeat"></gc-icon>
    </van-field> -->
  </van-action-sheet>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ActionSheet, Field, Cell, Button, Calendar } from "vant";
import moment from "moment";

import { ITask, TaskService } from "@/services/indexedDB/task";

Vue.use(ActionSheet)
  .use(Field)
  .use(Cell)
  .use(Button)
  .use(Calendar);

@Component({
  filters: {
    timeFilter(time: number | null): string {
      return time === null ? "选择日期" : moment(time).format("YYYY-MM-DD");
    }
  }
})
export default class CreateTask extends Vue {
  /** 任务服务 */
  taskService = new TaskService();
  /** 是否显示新增面板 */
  show = false;
  /** 是否显示日历 */
  showCalendar = false;
  /** 任务实体 */
  task: ITask = this.taskService.initTask();

  /** 重置 */
  reset() {
    this.show = false;
    this.task = this.taskService.initTask();
  }

  /** 设置日期 */
  setDate(date: string | Date) {
    if (date === "none") {
      this.task.planDate = null;
      return;
    }
    if (date instanceof Date) {
      this.task.planDate = moment(date).valueOf();
    }
    this.showCalendar = false;
  }

  /** 日期格式化 */
  transDate(date: string | Date): string {
    if (date instanceof Date) {
      return moment(date).format("YYYY-MM-DD");
    }
    return date === "today"
      ? moment().format("YYYY-MM-DD")
      : date === "tomorrow"
      ? moment()
          .add(1, "day")
          .format("YYYY-MM-DD")
      : "none";
  }

  /** 设置任务小番茄数 */
  setTomato(n: number) {
    this.task.tomato = n;
  }

  /** 确认 */
  submit() {
    /** 校验 */
    if (!this.task.title) {
      // TODO 增加弹出提示
      // FIXME 修改为校验接口
      return false;
    }
    this.$emit("add", this.task);
  }
}
</script>

<style lang="scss" scoped>
.van-button__text {
  padding: 0 8px;
}

.date-selected {
  background-color: $c-app-theme;
  color: $c-white;
}

.tomato-selected {
  color: $c-app-theme;
}

.tomato-contain {
  & .gc-icon {
    margin: 0 5px;
  }

  & .gc-icon:first-child {
    margin-left: 0;
  }

  & .gc-icon:last-child {
    margin-right: 0;
  }
}

.submit-btn {
  @include flex(h);
  justify-content: center;

  & > button {
    width: 80%;
    margin: 10px 0;
    background-color: $c-app-theme;
  }
}
</style>
