<script setup>
  import { ref } from 'vue'

  let food = ref(localStorage.getItem('food'))

  function write() {
    localStorage.setItem('food', food.value);
  }
</script>

<template>
  <main>
    <label>What is your fave food?</label>
    <input type="text" v-model="food" @input="write" />
  </main>
</template>
