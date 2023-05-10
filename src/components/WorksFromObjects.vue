<script setup lang="ts">
import { works } from './WorksObject'
import Work from './Work.vue'
</script>

<template>
  <div class="wrapper">
    <h2>works</h2>
    <div v-for="work in works">
      <Work :title="work.title" :description="work.description" :tags="work.tags" :image-file="work.image"
        :github="work.github" :blog="work.blog" :service="work.service" :service-icon="work.serviceImage" />
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #0474FF;
  text-decoration: underline;
}
</style>