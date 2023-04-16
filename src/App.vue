<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import TabButton from './components/TabButton.vue'
import Tabs from './components/Tabs.vue'
import Bar from './components/Bar.vue'
</script>

<template>
  <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

            <div class="wrapper">
              <HelloWorld msg="You did it!" />
            </div> -->
  <div class="header">
    <Header />

    <Tabs />

    <Bar />
  </div>




  <main>
    <!-- <TheWelcome /> -->
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
