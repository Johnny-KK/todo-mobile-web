<template>
  <div>
    <keep-alive>
      <router-view class="main-tab" />
    </keep-alive>

    <van-tabbar v-model="activeTab" route>
      <van-tabbar-item v-for="tab in tabList" :key="tab.route" :to="tab.route">
        <gc-icon :name="tab.icon"></gc-icon>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';
import { CommonService } from '@/services/indexedDB/common';

Vue.use(Tabbar).use(TabbarItem);

@Component
export default class Main extends Vue {
  commonService = new CommonService();

  // 选项卡
  activeTab = 0;
  tabList = [
    { icon: 'home', route: '/main/home' },
    { icon: 'time', route: '/main/tomato' },
    { icon: 'report', route: '/main/report' },
    { icon: 'user', route: '/main/mine' }
  ];

  async mounted() {
    // 获取上次处理时间，判断是否需要再次处理任务
    const common = await this.commonService.get();

    if (common.lastHandle === null) {
      // TODO handle task
    }
  }
}
</script>

<style lang="scss" scoped>
.main-tab {
  height: auto;
  top: 0;
  bottom: 50px;
}

.gc-icon {
  font-size: $fz-sl;
}

.van-tabbar-item--active {
  color: $c-app-theme;
}
</style>
