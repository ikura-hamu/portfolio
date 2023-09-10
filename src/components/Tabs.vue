<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import TabButton from './TabButton.vue'

const emit = defineEmits<{
  (e: 'change', tabName: string): void
}>()

const tabValues: Ref<Array<{ name: string, val: boolean }>> = ref([
  { name: "about me", val: true },
  { name: "works", val: false },
  { name: "contact", val: false }
])

function toggleTabs(name: string): void {
  for (var i = 0; i < tabValues.value.length; i++) {
    if (tabValues.value[i].name == name) {
      tabValues.value[i].val = true
      emit('change', name)
    } else {
      tabValues.value[i].val = false
    }
  }
}
</script>

<template>
  <div class="tabs">
    <div v-for="tab in tabValues">
      <TabButton :name="tab.name" :selected="tab.val" @e-selected="toggleTabs(tab.name)" class="tab" />
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.tab{
  cursor: pointer;
}
</style>