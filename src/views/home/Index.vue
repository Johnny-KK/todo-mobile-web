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

    <date-bar v-model="taskListParams.planDate" ref="dateBar"></date-bar>

    <div class="gc-layout-scroll">
      <transition-group name="flip-list">
        <p-task
          v-for="task in taskList"
          :key="task.id"
          :task="task"
          @changeState="changeState"
          @del="del"
        ></p-task>
      </transition-group>
    </div>

    <div class="add-btn" @click="$refs.createForm.show = true">
      <gc-icon name="add"></gc-icon>
    </div>

    <div class="today-btn" @click="$refs.dateBar.fixToday()">
      <gc-icon name="aim"></gc-icon>
    </div>

    <create-task ref="createForm" @add="addTask"></create-task>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { ITask, TaskService, TaskStatus } from '@/services/indexedDB/task';
import moment from 'moment';
import CDateBar from './widget/dateBar.vue';
import CTask from './widget/task.vue';
import CreateTask from './widget/createTask.vue';

@Component({
  components: {
    'create-task': CreateTask,
    'p-task': CTask,
    'date-bar': CDateBar
  }
})
export default class CHome extends Vue {
  taskService = new TaskService(); //
  taskList: ITask[] = []; // 任务列表
  taskListParams = {
    planDate: moment()
      .startOf('date')
      .valueOf()
  };

  /** 获取任务列表 */
  @Watch('taskListParams', { deep: true, immediate: true })
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

.flip-list-move {
  transition: transform 0.5s;
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

.today-btn {
  background-color: $c-app-theme;
  color: $c-white;
  position: absolute;
  bottom: 15px;
  right: calc(15px + 40px + 15px);
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
