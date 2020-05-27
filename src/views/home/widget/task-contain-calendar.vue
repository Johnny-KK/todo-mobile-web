<template>
  <div>
    <date-bar v-model="taskListParams.planDate" ref="dateBar"></date-bar>

    <div class="gc-layout-scroll">
      <transition-group name="flip-list">
        <p-task
          v-for="task in taskList"
          :key="task.id"
          :task="task"
          @changeState="changeState"
          @del="deleteTask"
        ></p-task>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CDateBar from './dateBar.vue';
import CTask from './task.vue';

@Component({
  components: { 'date-bar': CDateBar, 'p-task': CTask }
})
export default class CTaskContainCalendar extends Vue {}
</script>
