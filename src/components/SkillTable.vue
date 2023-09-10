<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { skill } from './SkillsObjects'
import { skills } from './SkillsObjects'

const allSkills = ref(skills)

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
        <th>技術</th>
        <th>レベル</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="skill in allSkills">
        <td>{{ skill.skill }}</td>
        <td>
          <div style="color: #0474FF">{{ stars(skill.level) }}</div>
        </td>
        <td>{{ skill.comment }}</td>
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
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  border-spacing: 0;
  padding-right: 0px;
}

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

th:nth-child(2),
td:nth-child(2) {
  width: 100px;
}
</style>