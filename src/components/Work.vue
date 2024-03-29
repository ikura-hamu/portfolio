<script setup lang="ts">

const props = defineProps<{
  title: string
  description: string
  imageFile?: string
  service?: string
  serviceIcon?: string
  github?: string
  blog?: string
  tags?: string[]
}>()

const emit = defineEmits<{
  (e: 'noIcon'): void
}>()

if (props.service == undefined) {
  emit("noIcon")
}

function autoLink(text: string) {
  return text.replace(/(https?:\/\/[a-zA-Z0-9-_\.\/]*)/g, "<a href='$1'  target=\"_blank\" rel=\"noopener noreferrer\">$1</a>");
}

const generateImgPath = (fileName: string | undefined): string => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}

</script>

<template>
  <div class="wrapper">
    <div class="image_a_wrapper">
      <a :href="service" target="_blank" rel="noopener noreferrer">
        <div class="image_wrapper">
          <img class="image" :src="generateImgPath(props.imageFile)">
        </div>
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
      <div class="description">
        <p v-html="autoLink(props.description)"></p>
      </div>
    </div>
    <div class="links">
      <div class="link">
        <a v-if="props.github != null" :href="props.github" target="_blank" rel="noopener noreferrer">
          <img class="link_icon" src="../assets/images/github-mark.png">
        </a>
      </div>
      <div class="link">
        <a v-if="props.service != null" :href="props.service" target="_blank" rel="noopener noreferrer">
          <img class="link_icon" :src="generateImgPath(props.serviceIcon)">
        </a>
      </div>
      <div class="link">
        <a v-if="props.blog != null" :href="props.blog" target="_blank" rel="noopener noreferrer">
          <img class="link_icon" src="../assets/images/article_material.png">
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 3.5fr 8fr 1fr;
  margin-top: 4px;
  margin-bottom: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 4px;
  padding-right: 4px;
  border: 2px solid;
  border-color: #D9D9D9;
  border-radius: 16px;

}

img {
  max-width: 100%;
  max-height: auto;

  padding: 4px;
  border-radius: 8px;
}

.image_a_wrapper {
  margin: auto;
  border-radius: 8px;
}

img:hover {
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
  background-color: #0474FF33;
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
  border: 1px solid #F7FF96;
  border-radius: 4px;
}
</style>