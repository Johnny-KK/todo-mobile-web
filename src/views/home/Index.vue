<template>
  <div class="gc-layout-main">
    <div class="header">
      <gc-icon name="menu"></gc-icon>
      <span>Todo清单</span>
      <span class="sperate"></span>
      <gc-icon name="box"></gc-icon>
      <gc-icon name="cloud-sync"></gc-icon>
      <gc-icon name="more"></gc-icon>
    </div>

    <div class="date-bar">
      <div
        v-for="date in dateList"
        :key="date"
        :class="{ 'date-bar--selected': date === taskListParams.planDate }"
        @click="taskListParams.planDate = date"
      >
        {{ date | timeFilter }}
      </div>
    </div>

    <div class="gc-layout-scroll">
      <p-task
        v-for="task in taskList"
        :key="task.id"
        :task="task"
        @changeState="changeState"
        @del="del"
      ></p-task>
    </div>

    <div class="add-btn" @click="$refs.createForm.show = true">
      <gc-icon name="add"></gc-icon>
    </div>

    <create-task ref="createForm" @add="addTask"></create-task>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { ITask, TaskService, TaskStatus } from "@/services/indexedDB/task";
import moment from "moment";
import CTask from "./widget/task.vue";
import CreateTask from "./widget/createTask.vue";

@Component({
  components: { "create-task": CreateTask, "p-task": CTask },
  filters: {
    timeFilter(time: number): string {
      return moment(time).format("DD");
    }
  }
})
export default class CHome extends Vue {
  taskService = new TaskService(); //
  taskList: ITask[] = []; // 任务列表
  taskListParams = {
    planDate: moment()
      .startOf("date")
      .valueOf()
  };
  dateList: number[] = [...new Array(moment().daysInMonth())].map((x, i) =>
    moment(
      moment()
        .startOf("month")
        .add(i, "day")
    ).valueOf()
  ); // 当月日期列表

  /** 获取任务列表 */
  @Watch("taskListParams", { deep: true, immediate: true })
  private queryTaskList(): void {
    this.taskService.query(this.taskListParams.planDate).then(data => {
      this.taskList = data;
    });
  }

  /** 新增任务 */
  addTask(task: ITask) {
    this.taskService.add(task).then(() => {
      this.queryTaskList();
      (this.$refs.createForm as CreateTask).reset();
    });
  }

  /** 改变任务完成状态 */
  changeState(param: { checked: boolean; id: number }) {
    this.taskService
      .changeState(
        param.id,
        param.checked ? TaskStatus.已完成 : TaskStatus.待完成
      )
      .then(() => {
        this.queryTaskList();
      });
  }

  /** 删除任务 */
  del(id: number) {
    this.taskService.del(id).then(() => this.queryTaskList());
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include flex-c(h);
  background-color: $c-app-theme;
  color: $c-white;
  height: 44px;
  padding: 0 10px;

  .sperate {
    flex: 1;
  }

  & > * {
    margin: 0 5px;
  }
}

.date-bar {
  @include flex(h);
  overflow-x: scroll;
  padding: 10px 0;
  background-color: $c-app-theme;

  & > div {
    color: $c-white;
    margin: 0 5px;
    text-align: center;
    line-height: 40px;
    flex: 0 0 40px;
    border-radius: 20px;
  }

  & > .date-bar--selected {
    color: $c-app-theme;
    background-color: $c-white;
    opacity: 0.8;
  }
}

.add-btn {
  background-color: $c-app-theme;
  color: $c-white;
  position: absolute;
  bottom: 15px;
  right: 15px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;

  &:active {
    background-color: #006f6b;
  }
}
</style>
