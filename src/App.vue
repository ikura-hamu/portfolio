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

  <div class="body">
    <div v-show="currentTabName === tabNamesAboutMe" :id="tabNamesAboutMe">
      <AboutMe />
    </div>
    <div v-show="currentTabName === tabNamesWorks" :id="tabNamesWorks">
      <WorksFromObjects />
    </div>
    <div v-show="currentTabName === tabNamesContact" :id="tabNamesContact">
      <Contact />
    </div>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  padding-top: 12px;
  top: 0em;

  margin-left: auto;
  margin-right: auto;

  z-index: 2;

  background-color: #ffffff;
}

.body {
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

  .body {
    width: 90%;
  }
}

@media (min-width: 512px) and (max-width: 1024px) {
  .header {
    width: 80%;
  }

  .body {
    width: 75%;
  }
}

@media (min-width: 1024px) {
  .header {
    width: 820px;
  }

  .body {
    width: 768px;
  }
}
</style>
