<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import TabButton from './TabButton.vue'

const tabValues: Ref<Array<{ name: string, val: boolean }>> = ref([
  { name: "about me", val: true },
  { name: "works", val: false },
  { name: "contact", val: false }
])

function toggleTabs(name: String): void {
  for (var i = 0; i < tabValues.value.length; i++) {
    if (tabValues.value[i].name == name) {
      tabValues.value[i].val = true
    } else {
      tabValues.value[i].val = false
    }
  }
}
</script>

<template>
  <div class="tabs">
    <div v-for="tab in tabValues">
      <div>
        <TabButton :name="tab.name" :selected="tab.val" @e-selected="toggleTabs(tab.name)" />
      </div>
    </div>
  </div>
</template>

<style>
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>