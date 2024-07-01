<template>
  <component :is="icon" width="16" height="16" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
const props = defineProps<{ name: string }>()
const icon = computed(() => {
  return defineAsyncComponent(() => import(`@p/icons/${props.name}.svg`))
})
</script>

<style scoped></style>
