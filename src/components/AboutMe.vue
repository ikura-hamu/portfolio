<script setup lang="ts">
import { computed } from 'vue'

const grade = computed(() => {
  let now = new Date()
  var grade
  if (now.getMonth() <= 2) {
    grade = now.getFullYear() - 2022
  } else {
    grade = now.getFullYear() - 2021
  }
  return "学士" + grade + "年"
})
</script>

<template>
  <h2>about me</h2>
  <br>
  <div>
    <h3>大学</h3>
    <ul>
      <li>東京工業大学 工学院情報通信系</li>
      <li>{{ grade }}</li>
    </ul>
  </div>
  <br>
  <div>
    <h3>サークル</h3>
    <ul>
      <li>東京工業大学デジタル創作同好会traP</li>
      <ul>
        <li>公式ページ <a href="https://trap.jp">https://trap.jp</a></li>
        <li>Twitter <a href="https://twitter.com/traPtitech">@traPtitech</a></li>
      </ul>
    </ul>
  </div>
  <br>
  <div>
    <h3>技術</h3>
    <ul>
      <li>Go</li>
      <li>MySQL</li>
    </ul>
  </div>
  <br>
  <div>
    <h3>趣味</h3>
    <ul>
      <li>ゲーム作成</li>
      <ul>
        <li>Springin' <a href="https://www.springin.org/">公式ページ</a></li>
        <li>Unity</li>
      </ul>
      <li>バスケットボール</li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #0474FF;
  text-decoration: underline;
}
</style>