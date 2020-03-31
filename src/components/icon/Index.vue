<template>
  <svg class="gc-icon" aria-hidden="true" @click="$emit('click')">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
/**
 * TODO
 *
 * 新增加载网络图片地址
 */
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ name: 'gc-icon' })
export default class GcIcon extends Vue {
  /** SVG图标名称 */
  @Prop({ type: String, default: 'emoji' }) name?: string;
  /** URL图标地址 在name存在时忽略 */
  @Prop({ type: String, validator: value => value.endsWith('jpg') })
  url?: string;
}
</script>

<style lang="scss" scoped>
.gc-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
