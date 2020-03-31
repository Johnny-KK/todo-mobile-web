<template>
  <div id="app">
    <vue-page-stack>
      <router-view class="gc-layout-main" />
    </vue-page-stack>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
