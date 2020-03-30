<template>
  <van-swipe-cell>
    <van-cell>
      <!-- 任务信息 -->
      <van-checkbox
        slot="title"
        v-model="checked"
        shape="square"
        @change="change"
        >{{ task.title }}</van-checkbox
      >

      <div slot="label">{{ task.content }}</div>

      <!-- 小番茄 -->
      <div slot="default" class="tomato-contain">
        <gc-icon v-for="n in task.tomato" :key="n" name="tomato"></gc-icon>
      </div>
    </van-cell>

    <!-- 子任务 -->
    <van-checkbox-group v-if="task.children" v-model="result">
      <van-checkbox
        v-for="item in task.children"
        :key="item.id"
        :name="item.id"
        >{{ item.title }}</van-checkbox
      >
    </van-checkbox-group>

    <template slot="right">
      <van-button square type="danger" text="删除" @click="del" />
      <van-button square type="primary" text="延期" />
    </template>
  </van-swipe-cell>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Checkbox, SwipeCell, Button, Cell, CheckboxGroup } from "vant";
import { ITask, TaskStatus } from "@/services/indexedDB/task";

Vue.use(Checkbox)
  .use(CheckboxGroup)
  .use(SwipeCell)
  .use(Button)
  .use(Cell);

@Component
export default class CTask extends Vue {
  @Prop({ required: true }) task!: ITask;

  checked = this.task.status === TaskStatus.已完成;

  result = [];

  /** */
  change(checked: boolean) {
    this.$emit("changeState", { checked: checked, id: this.task.id });
  }

  /** */
  del() {
    this.$emit("del", this.task.id);
  }
}
</script>

<style lang="scss" scoped>
/** 默认样式修改 */
.van-swipe-cell {
  .van-cell__value {
    flex: 0 0 20%;
  }

  .van-cell__label {
    margin-left: 28px;
  }

  .van-button {
    height: 100%;
  }

  .van-checkbox-group {
    background-color: $c-white;
    padding: 10px 26px;

    .van-checkbox {
      margin: 5px 0;
    }
  }
}

/deep/.van-checkbox__icon--checked .van-icon {
  border-color: $c-app-theme;
  background-color: $c-app-theme;
}

.tomato-contain {
  & > .gc-icon:not(:last-child) {
    margin-right: 10px;
  }
}

.task-checked {
  color: $c-grey;
  text-decoration: line-through;
}
</style>
