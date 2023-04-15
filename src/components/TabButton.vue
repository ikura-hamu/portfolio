<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(
  {
    "name": { type: String, required: true }
  }
)

const emit = defineEmits<{
  (e: 'emitSelected'): void
}>()

const selected = ref(true)
function toggle() {
  selected.value = !selected.value
  emit('emitSelected')
}

</script>

<template>
  <div :class="selected ? 'rectangle_selected' : 'rectangle'" @click="toggle">
    <div :class="selected ? 'tab_text_selected' : 'tab_text'">
      {{ name }}
    </div>
  </div>
</template>

<style>
.rectangle {
  box-sizing: border-box;

  height: 75px;

  background: #FFFFFF;
  border: 3px solid #D9D9D9;
  border-radius: 30px;
}

.rectangle_selected {
  box-sizing: border-box;

  height: 75px;

  background: #D9D9D9;
  border: 3px solid #0474FF;
  border-radius: 30px;
}

.tab_text {
  position: absolute;
  left: 8.79%;
  right: 8.24%;
  top: 20%;
  bottom: 20%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-align: center;

  color: #000000;
}

.tab_text_selected {
  position: absolute;
  left: 8.79%;
  right: 8.24%;
  top: 20%;
  bottom: 20%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-align: center;

  color: #0474FF;

}
</style>