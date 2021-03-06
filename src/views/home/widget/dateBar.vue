<template>
  <div class="date-bar">
    <div v-for="date in dateList" :key="date" class="date-bar__item">
      <div :class="dateItemClass(date)" @click="$emit('input', date)">
        {{ date | timeFilter }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import moment from 'moment';

@Component({
  filters: {
    timeFilter(time: number): string {
      return moment(time).format('DD');
    }
  }
})
export default class CDateBar extends Vue {
  /** 当前选择日期 */
  @Prop() value!: number;

  /** 当月日期列表 */
  dateList: number[] = [...new Array(moment().daysInMonth())].map((x, i) =>
    moment(
      moment()
        .startOf('month')
        .add(i, 'day')
    ).valueOf()
  );

  activated() {
    this.scrollToCenter();
  }

  /** 日期样式 */
  dateItemClass(date: number) {
    if (this.value === date) {
      return { 'date-bar__item--selected': true };
    }
    if (
      date ===
      moment()
        .startOf('date')
        .valueOf()
    ) {
      return { 'date-bar__item--today': true };
    }
  }

  // FIXME 修复在vw模式下位置计算错误的BUG
  /** 使当前日期滚动到当中位置 */
  scrollToCenter() {
    const index = this.dateList.findIndex(
      x =>
        x ===
        moment()
          .startOf('date')
          .valueOf()
    );
    const barItemWidth = 50;
    this.$el.scrollLeft =
      index * barItemWidth -
      (this.$el as HTMLElement).offsetWidth / 2 +
      barItemWidth / 2;
  }

  /** 定位到今天 */
  fixToday() {
    this.$emit(
      'input',
      moment()
        .startOf('date')
        .valueOf()
    );
    this.scrollToCenter();
  }
}
</script>

<style lang="scss" scoped>
.date-bar {
  @include flex(h);
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 10px 0;
  background-color: $c-app-theme;

  .date-bar__item {
    color: $c-white;
    text-align: center;
    flex: 0 0 50px;
    height: 50px;
    @include flex-c(a);

    & > div {
      line-height: 40px;
      width: 40px;
      border-radius: 20px;
      text-align: center;
    }

    .date-bar__item--selected {
      color: $c-app-theme;
      background-color: $c-white;
      opacity: 0.8;
    }

    .date-bar__item--today {
      color: $c-black;
      background-color: $c-white;
      opacity: 0.3;
    }
  }
}
</style>
