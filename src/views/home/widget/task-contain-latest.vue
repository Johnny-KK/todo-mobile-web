<template>
  <div>
    <div class="date-title">今天</div>
    <transition-group name="flip-list">
      <p-task
        v-for="task in taskListToday"
        :key="task.id"
        :task="task"
      ></p-task>
    </transition-group>

    <div class="date-title">明天</div>
    <transition-group name="flip-list">
      <p-task
        v-for="task in taskListTomorrow"
        :key="task.id"
        :task="task"
      ></p-task>
    </transition-group>

    <div class="date-title">后天</div>
    <transition-group name="flip-list">
      <p-task
        v-for="task in taskListTomAfter"
        :key="task.id"
        :task="task"
      ></p-task>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import moment from 'moment';

import CTask from './task.vue';
import { Cell } from 'vant';

import taskInteractor from '@/core/interactors/taskInteractor';
import { ITaskD } from '@/core/types/taskD';

Vue.use(Cell);

@Component({
  components: { 'p-task': CTask }
})
export default class CTaskContainLatest extends Vue {
  /** 今天任务列表 */
  taskListToday: ITaskD[] = [];
  /** 明天任务列表 */
  taskListTomorrow: ITaskD[] = [];
  /** 后天任务列表 */
  taskListTomAfter: ITaskD[] = [];

  mounted() {
    taskInteractor
      .queryTaskList(
        moment()
          .startOf('date')
          .valueOf()
      )
      .then(data => {
        this.taskListToday = data;
      });

    taskInteractor
      .queryTaskList(
        moment()
          .add(1, 'day')
          .startOf('date')
          .valueOf()
      )
      .then(data => {
        this.taskListTomorrow = data;
      });

    taskInteractor
      .queryTaskList(
        moment()
          .add(2, 'day')
          .startOf('date')
          .valueOf()
      )
      .then(data => {
        this.taskListTomAfter = data;
      });
  }
}
</script>

<style lang="scss" scoped>
.date-title {
  background-color: rgba(0, 141, 142, 0.4);
  font-size: 12px;
  padding: 6px 16px;
}
</style>
