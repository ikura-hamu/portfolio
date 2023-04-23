<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps<{
  title: string
  description: string
  imageFile: string
  service?: { "service": string, "icon": string }
  github?: string
  blog?: string
  tags?: string[]
}>()

const image = computed(() => {
  return "/src/images/" + props.imageFile
})

const workIcon = computed(() => {
  return "/src/images/" + props.service?.icon
})

</script>

<template>
  <div class="wrapper">
    <div class="image_wrapper">
      <a :href="service?.service" target="_blank" rel="noopener noreferrer">
        <img class="image" :src="image" height="120" width="120">
      </a>
      
    </div>
    <div class="text">
      <h2 class="title">{{ props.title }}</h2>
      <div class="tags">
        <div class="tag" v-for="tag in tags">
          #{{ tag }}
        </div>
      </div>
      <br>
      <div class="description">{{ props.description }}</div>
    </div>
    <div class="links">
      <div class="link">
        <a v-if="props.github != null" :href="props.github">
          <img class="link_icon" src="../images/github-mark.png">
        </a>
      </div>
      <div class="link">
        <a v-if="props.service != null" :href="props.service.service">
          <img class="link_icon" :src="workIcon">
        </a>
      </div>
      <div class="link">
        <a v-if="props.blog != null" :href="props.blog">
          <img class="link_icon" src="../images/article_material.png">
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 3.5fr 8fr 1fr;
  margin-top: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 4px;
  padding-right: 4px;
  border: 2px solid;
  border-color: black;
  border-radius: 16px;

}

.image_wrapper {
  margin: auto;
  border-radius: 8px;
}

.image_wrapper:hover {
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);

}

.title {
  color: #0474FF;
  font-weight: bold;
}

.text {
  margin-right: 2%;
  margin-left: 2%;
  color: black;
}

.description {
  word-wrap: break-word;
  white-space: normal;
  font-size: 0.9rem;
}

.wrapper:hover {
  border-color: #0474FF;
  border-width: 4%;
  background-color: rgba(247, 255, 150, 0.2);
}

.links {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 0px;
}

.link {
  margin: auto;
  max-width: 90%;
}

.link_icon {
  width: 100%;
  height: 33%;
  border-radius: 4px;
}

.link_icon:hover {
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
}

a:hover {
  background-color: rgba(247, 255, 150, 0.2);
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
  border: 1px solid rgb(247, 255, 150);
  border-radius: 4px;
}
</style>