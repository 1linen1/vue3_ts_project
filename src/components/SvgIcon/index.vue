<template>
  <svg :style="{width, height}">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    // :href 前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    // 图标名称
    name: String,
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '16px'
    },
    height: {
      type: String,
      default: '16px'
    }
  })
</script>

<style lang="less" scoped>

</style>