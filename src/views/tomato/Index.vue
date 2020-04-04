<template>
  <div class="gc-layout-main">
    <div class="header">
      <div>番茄专注</div>
      <gc-icon name="setting"></gc-icon>
    </div>

    <div class="gc-layout-scroll"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CTomato extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  @include flex-c(h);
  justify-content: space-between;
  height: 44px;
  padding: 0 15px;
  background-color: $c-app-theme;
  color: $c-white;
}
</style>
