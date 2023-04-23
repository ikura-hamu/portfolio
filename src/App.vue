<script setup lang="ts">
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import TabButton from './components/TabButton.vue'
import Tabs from './components/Tabs.vue'
import Bar from './components/Bar.vue'
import Preparing from './components/Preparing.vue'
import AboutMe from './components/AboutMe.vue'
import Work from './components/Work.vue'

import type WorkData from './components/Work.vue'


function tabChange(tabName: string): void {
  currentTabName.value = tabName
}

const currentTabName = ref("about me")

const aaa = "おにごっこのプロジェクト終わったら何か新しいことやりたいけど、フロントちゃんとやるか、DTMするか迷ってる。おにごっこのプロジェクト終わったら何か新しいことやりたいけど、フロントちゃんとやるか、DTMするか迷ってる"
const tags=["tag1", "tag2"]
</script>

<template>
  <div class="header">
    <Header />

    <Tabs @change="(tabName) => tabChange(tabName)" />

    <Bar />
  </div>
  <!-- <div class="back"></div> -->


  <main>
    <AboutMe v-if="currentTabName == 'about me'" />
    <Work v-if="currentTabName == 'works'" :title="'title'" :description="aaa"
      :image-file="'ikura-hamu_icon.PNG'" :github="'aaa'" :blog="'aaa'" :service="{service:'aaa', icon:'ikura-hamu_icon.PNG'}" :tags="tags"/>
    <Preparing v-if="currentTabName == 'contact'" :content-name="'contact'" />
  </main>
</template>

<style>
.header {
  position: sticky;
  margin-top: 1em;
  top: 1em;

  margin-left: auto;
  margin-right: auto;

  z-index: 2;

  background-color: #ffffff;
}

main {
  margin-left: auto;
  margin-right: auto;
}

/* .back {
  width: 685px;
  height: 200px;

  top: 0;

  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
} */

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (max-width: 512px) {
  .header {
    width: 95%
  }

  main {
    width: 95%;
  }
}

@media (min-width: 512px) {
  .header {
    width: 500px;
  }

  main {
    width: 500px;
  }
}
</style>
