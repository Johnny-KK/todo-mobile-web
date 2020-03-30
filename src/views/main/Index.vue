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
import { Vue, Component } from "vue-property-decorator";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);

@Component
export default class Main extends Vue {
  activeTab = 0;

  tabList = [
    { icon: "home", route: "/main/home" },
    { icon: "time", route: "/main/tomato" },
    { icon: "report", route: "/main/report" },
    { icon: "user", route: "/main/mine" }
  ];
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
