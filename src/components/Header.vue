<script setup lang="ts">

</script>

<template>
  <div class="top">
    <img src="../assets/images/ikura-hamu_icon.png" class="icon">
    <div class="name">
      <h1>いくら・はむ</h1>
      <h2>@ikura-hamu</h2>
    </div>

  </div>
</template>

<style>
.icon {
  height: 100px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 2px solid;
  border-color: #D9D9D9;
}

.icon:hover {
  border-color: #0474FF;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
}

.top {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.name {
  display: grid;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 16px;
}
</style>