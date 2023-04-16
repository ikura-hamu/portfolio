<script setup lang="ts">
const props = defineProps({ contentName: { type: String } })
</script>

<template>
  <h2>{{ props.contentName || 'なにか' }}</h2>
  <h3>ただいま準備中です！</h3>
</template>

<style scoped>
h2{
  color: #0474FF;
}
</style>