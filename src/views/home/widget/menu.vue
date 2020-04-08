<template>
  <van-popup v-model="show" position="left" class="menu">
    <van-cell title="日历视图" clickable>
      <div slot="icon" class="menu__icon">
        <gc-icon name="calendar"></gc-icon>
      </div>
    </van-cell>
    <van-cell title="最近三天" clickable>
      <div slot="icon" class="menu__icon"><gc-icon name="time"></gc-icon></div>
    </van-cell>

    <div class="collection__title">分类清单</div>
    <van-cell
      v-for="item in collectionList"
      :key="item.id"
      :title="item.name"
      clickable
    >
      <div slot="icon">
        <span
          class="collection__icon menu__icon"
          :style="{ 'background-color': item.color }"
        ></span>
      </div>
    </van-cell>
    <van-cell title="新建" clickable @click="$emit('createCollection')">
      <div slot="icon">
        <gc-icon class="menu__icon" name="plus-circle"></gc-icon>
      </div>
    </van-cell>
  </van-popup>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Popup, Cell } from 'vant';

import collectionInteractor from '@/core/interactors/collectionInteractor';
import { ICollection } from '@/core/entities/collection';

Vue.use(Popup).use(Cell);

@Component
export default class CMenu extends Vue {
  show = false;

  /** 收集箱列表 */
  collectionList: ICollection[] = [];

  mounted() {
    this.queryCollectionList();
  }

  /** 查询收集箱列表 */
  queryCollectionList() {
    collectionInteractor
      .queryCollectionList()
      .then(list => (this.collectionList = list));
  }
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 70%;

  .menu__icon {
    margin-right: 10px;
  }
}

.collection__title {
  font-size: $fz-sss;
  color: $c-grey;
  padding: 10px 16px;
}

.collection__icon {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 1rem;
  vertical-align: middle;
}
</style>
