<template>
  <van-popup v-model="show" style="width: 80%;">
    <div class="collection-form">
      <div class="title">新建清单</div>

      <div class="name-contain">
        <div
          class="icon"
          :style="{ 'background-color': collection.color }"
        ></div>
        <van-field v-model="collection.name" placeholder="清单名称"></van-field>
      </div>

      <div class="color-contain">
        <div v-for="item in colorList" :key="item" class="color-item">
          <div
            :style="{ 'background-color': item }"
            class="color-item__block"
            @click="collection.color = item"
          ></div>
        </div>
      </div>

      <van-button color="#008d8e" class="submit" @click="submit"
        >新建</van-button
      >
    </div>
  </van-popup>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Popup, Button, Field, Toast } from 'vant';

import { ICollection } from '@/core/entities/collection';
import collectionInteractor from '@/core/interactors/collectionInteractor';

Vue.use(Popup)
  .use(Button)
  .use(Field)
  .use(Toast);

@Component
export default class CCreateCollection extends Vue {
  show = false;

  collection: ICollection = collectionInteractor.initCollection();

  colorList: string[] = [
    '#00acc1',
    '#ef5350',
    '#f9a825',
    '#1e88e5',
    '#40c4ff',
    '#f06292',
    '#424242'
  ];

  /** 初始化表单 */
  init() {
    this.collection = collectionInteractor.initCollection();
  }

  /** 新增收集箱 */
  submit() {
    collectionInteractor
      .addCollection(this.collection)
      .then(() => Toast('新增成功'))
      .catch(() => Toast('新增失败'))
      .finally(() => {
        this.show = false;
        this.$emit('reload');
        setTimeout(() => this.init(), 500);
      });
  }
}
</script>

<style lang="scss" scoped>
.collection-form {
  padding: 20px;

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .name-contain {
    @include flex-c(h);
    background-color: #f5f5f5;
    margin-bottom: 20px;

    .icon {
      height: 1rem;
      width: 1rem;
      border-radius: 1rem;
      margin-left: 16px;
    }

    .van-cell {
      background-color: inherit;
    }
  }

  .color-contain {
    @include flex(h);
    flex-wrap: wrap;
    margin-bottom: 20px;

    .color-item {
      width: 25%;
      text-align: center;
      margin: 10px 0;

      .color-item__block {
        display: inline-block;
        border-radius: 20px;
        width: 40px;
        height: 40px;
      }
    }
  }

  .submit {
    width: 100%;
  }
}
</style>
