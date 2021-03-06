<template>
  <div class="gc-layout-main">
    <div class="header">
      <gc-icon name="menu" @click="$refs.menu.show = true"></gc-icon>
      <span>Todo清单</span>
      <span class="sperate"></span>
      <gc-icon name="box"></gc-icon>
      <gc-icon name="cloud-sync"></gc-icon>
      <gc-icon name="more"></gc-icon>
    </div>

    <p-menu ref="menu" @createCollection="addCollection"></p-menu>

    <!-- <date-bar v-model="taskListParams.planDate" ref="dateBar"></date-bar> -->

    <!-- <div class="gc-layout-scroll">
      <transition-group name="flip-list">
        <p-task
          v-for="task in taskList"
          :key="task.id"
          :task="task"
          @changeState="changeState"
          @del="deleteTask"
        ></p-task>
      </transition-group>
    </div> -->

    <div class="gc-layout-scroll">
      <task-contain-latest></task-contain-latest>
    </div>

    <div class="add-btn" @click="$refs.createTask.show = true">
      <gc-icon name="add"></gc-icon>
    </div>

    <div class="today-btn" @click="$refs.dateBar.fixToday()">
      <gc-icon name="aim"></gc-icon>
    </div>

    <create-task ref="createTask" @add="addTask"></create-task>

    <create-collection
      ref="createCollection"
      @reload="$refs.menu.queryCollectionList()"
    ></create-collection>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import moment from 'moment';
import CDateBar from './widget/dateBar.vue';
import CTask from './widget/task.vue';
import CCreateTask from './widget/createTask.vue';
import CMenu from './widget/menu.vue';
import CCreateCollection from './widget/createCollection.vue';
import CTaskContainLatest from './widget/task-contain-latest.vue';

import taskInteractor from '@/core/interactors/taskInteractor';
import { ITaskD } from '@/core/types/taskD';
import { TaskStatus } from '@/core/entities/task';
// import commonInteractor from '@/core/interactors/commonInteractor';
// import { ICommon } from '@/core/entities/common';

@Component({
  components: {
    'create-task': CCreateTask,
    'p-task': CTask,
    'date-bar': CDateBar,
    'p-menu': CMenu,
    'create-collection': CCreateCollection,
    'task-contain-latest': CTaskContainLatest
  }
})
export default class CHome extends Vue {
  /** 任务列表 */
  taskList: ITaskD[] = [];

  /** app常用信息 */
  // commonMsg: ICommon = null;

  mounted() {
    // this.queryCommonMsg();
  }

  /** 获取app常用信息 */
  // queryCommonMsg() {
  //   commonInteractor.getCommon().then(data => (this.commonMsg = data));
  // }

  /** 任务列表过滤条件 */
  taskListParams = {
    planDate: moment()
      .startOf('date')
      .valueOf()
  };

  /** 获取任务列表 */
  @Watch('taskListParams', { deep: true, immediate: true })
  private queryTaskList(): void {
    taskInteractor.queryTaskList(this.taskListParams.planDate).then(data => {
      this.taskList = data;
    });
  }

  /** 新增任务 */
  addTask(task: ITaskD) {
    taskInteractor.addTask(task).then(() => {
      this.queryTaskList();
      (this.$refs.createTask as CCreateTask).reset();
    });
  }

  /** 改变任务完成状态 */
  changeState(param: { checked: boolean; id: number }) {
    taskInteractor
      .updateTaskStatus(
        param.id,
        param.checked ? TaskStatus.已完成 : TaskStatus.待完成
      )
      .then(() => this.queryTaskList());
  }

  /** 删除任务 */
  deleteTask(id: number) {
    taskInteractor.delTask(id).then(() => this.queryTaskList());
  }

  /** 新增收集箱 */
  addCollection() {
    (this.$refs.menu as CMenu).show = false;
    (this.$refs.createCollection as CCreateCollection).show = true;
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
