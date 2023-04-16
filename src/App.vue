<script setup lang="ts">
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import TabButton from './components/TabButton.vue'
import Tabs from './components/Tabs.vue'
import Bar from './components/Bar.vue'
import Preparing from './components/Preparing.vue'

function tabChange(tabName: string): void {
  currentTabName.value = tabName
}

const currentTabName = ref("about me")
</script>

<template>
  <div class="header">
    <Header />

    <Tabs @change="(tabName) => tabChange(tabName)" />

    <Bar />
  </div>

  <main>
    <Preparing v-if="currentTabName=='about me'" :content-name="'about me'" />
    <Preparing v-if="currentTabName=='works'" :content-name="'works'" />
    <Preparing v-if="currentTabName=='contact'" :content-name="'contact'" />
  </main>
</template>

<style>
.header {
  margin-left: auto;
  margin-right: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (max-width: 390px) {
  .header {
    width: 390px;
  }
}

@media (min-width: 512px) {
  .header {
    width: 500px;
  }
}
</style>
