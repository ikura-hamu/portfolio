<script setup lang="ts">

const props = defineProps(
  {
    "name": { type: String, required: true },
    "selected": { type: Boolean, required: true }
  }
)

const emit = defineEmits<{
  (e: 'e-selected'): void
}>()

function toggle() {
  emit('e-selected')
}

</script>

<template>
  <div :class="selected ? 'rectangle_selected' : 'rectangle'" @click="toggle">
    <div :class="selected ? 'tab_text_selected' : 'tab_text'">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<style scoped>
.rectangle {
  box-sizing: border-box;

  height: 60px;

  background: #FFFFFF;
  border: 3px solid #D9D9D9;
  border-radius: 30px;
}

.rectangle:hover {
  box-sizing: border-box;

  height: 60px;

  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
}

.rectangle_selected {
  box-sizing: border-box;

  height: 60px;

  background: #D9D9D9;
  border: 3px solid #0474FF;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.tab_text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;

  line-height: 39px;
  text-align: center;

  top: 20%;
  bottom: 20%;

  color: #8d8d8d;
}

.tab_text_selected {
  font-family: 'Inter';
  font-style: normal;

  line-height: 39px;
  text-align: center;

  top: 20%;
  bottom: 20%;

  text-decoration: underline;

  color: #0474FF;

}
</style>