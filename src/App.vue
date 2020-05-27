<template>
  <div id="app">
    <vue-page-stack>
      <router-view class="gc-layout-main" />
    </vue-page-stack>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import commonInteractor from '@/core/interactors/commonInteractor';
import { ICommon } from '@/core/entities/common';

@Component
export default class App extends Vue {
  async created() {
    const common: ICommon = await commonInteractor.getCommon();
  }
}
</script>
