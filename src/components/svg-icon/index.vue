<template>
  <svg :class="svgClass" :color="color">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  iconClass: {
    type: String,
    require: true
  },
  color: {
    type: String,
    default: 'black'
  }
})

const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() =>
  props.iconClass ? `svg-icon #icon-${props.iconClass}` : 'svg-icon'
)
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
