<script setup lang="ts">
import { reactive, ref } from 'vue'
import { works } from './WorksObject'
import type { work } from './WorksObject';
import Work from './Work.vue'

const tagsDict: { [tagName: string]: work[] } = reactive({})
works.forEach(work => {
  work.tags.forEach(tag => {
    if (tagsDict[tag] == undefined) {
      tagsDict[tag] = [work]
    } else {
      tagsDict[tag].push(work)
    }
  });
});

const tags = ref(Object.keys(tagsDict))
const currentTag = ref("")
const currentWorks = ref(works)

function tagChange(tagName: string): void {
  if (currentTag.value == tagName) {
    currentTag.value = ""
    currentWorks.value = works
    return
  }
  currentTag.value = tagName
  currentWorks.value = tagsDict[tagName]
}

</script>

<template>
  <h2>works</h2>
  <div class="tags">
    <div class="tag" v-for="tag in tags" :class="{ selected_tag: tag == currentTag }" @click="tagChange(tag)">
      #{{ tag }}
    </div>
  </div>

  <div class="works_list">
    <div v-for="work in currentWorks">
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

.tags {
  padding-top: 8px;
  height: 64px;
}

.tag {
  background-color: #D9D9D9;
  width: fit-content;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 4px;
  float: left;
  font-size: small;
  font-weight: bold;
  color: #0474FF;
  border: 1px solid #F7FF96;
  border-radius: 4px;
  cursor: pointer;
}

.tag:hover {
  border: 1px solid #0474FF;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
}

.selected_tag {
  border: 1px solid #0474FF;
  background-color: #F7FF96;
}
</style>