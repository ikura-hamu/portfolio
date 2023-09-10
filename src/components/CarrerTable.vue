<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { skill } from './SkillsObjects'
import { careers } from './CareerObjects'

const allCareers = ref(careers)

const stars = (level: number) => {
  let stars = ""
  for (let i = 0; i < level; i++) {
    stars += "★"
  }
  return stars
}

</script>

<template>
  <table>
    <thead>
      <tr>
        <th>会社</th>
        <th>期間</th>
        <th>内容</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="career in allCareers">
        <td>{{ career.company }}</td>
        <td>{{ career.period }}</td>
        <td>{{ career.position }}</td>
        <td>{{ career.comment }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid;
}

table {
  table-layout: fixed;
  display: block;
  width: 100%;
  margin: 0 auto;
  /* display: block; */
  overflow-x: auto;
  border-spacing: 0;
}

/* tbody {
  white-space: nowrap;
} */

thead {
  background-color: #0474FF;
  color: white;
}

tbody {
  width: 100%;
  padding-right: 0px;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}
</style>