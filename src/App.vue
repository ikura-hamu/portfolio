<script setup lang="ts">
import { ref } from 'vue'

import Header from './components/Header.vue'
import Tabs from './components/Tabs.vue'
import Bar from './components/Bar.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import WorksFromObjects from './components/WorksFromObjects.vue'

const tabNamesAboutMe = "about me"
const tabNamesWorks = "works"
const tabNamesContact = "contact"

const tabScroll: { [tabName: string]: number } = {
  [tabNamesAboutMe]: 0,
  [tabNamesWorks]: 0,
  [tabNamesContact]: 0,
}

function tabChange(tabName: string): void {
  tabScroll[currentTabName.value] = window.scrollY
  currentTabName.value = tabName

  setTimeout(() => {
    window.scrollTo(0, tabScroll[tabName])
  }, 1)

}

const currentTabName = ref(tabNamesAboutMe)

</script>

<template>
  <div class="header">
    <Header />

    <Tabs @change="(tabName) => tabChange(tabName)" />

    <Bar />
  </div>

  <main>
    <div v-show="currentTabName === tabNamesAboutMe" :id="tabNamesAboutMe">
      <AboutMe />
    </div>
    <div v-show="currentTabName === tabNamesWorks" :id="tabNamesWorks">
      <!-- <Works /> -->
      <WorksFromObjects />
    </div>
    <div v-show="currentTabName === tabNamesContact" :id="tabNamesContact">
      <Contact />
    </div>

  </main>
</template>

<style>
.header {
  position: sticky;
  padding-top: 12px;
  top: 0em;

  margin-left: auto;
  margin-right: auto;

  z-index: 2;

  background-color: #ffffff;
}

main {
  margin-left: auto;
  margin-right: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (max-width: 512px) {
  .header {
    width: 95%
  }

  main {
    width: 90%;
  }
}

@media (min-width: 512px) {
  .header {
    width: 500px;
  }

  main {
    width: 450px;
  }
}
</style>
