<script setup>
  import { ref, watch } from 'vue'

  let food = ref(localStorage.getItem('food'))
  let age = ref(localStorage.getItem('age'))

  watch(food, val => {
    write('food', val);
  });

  watch(age, val => {
    write('age', val);
  });

  function write(key, value) {
    localStorage.setItem(key, value);
  }
</script>

<template>
  <main>

    <p>
      <label>What is your fave food?</label>
      <input type="text" v-model="food" />
    </p>

    <p>
      <label>How old ar you?</label>
      <input type="text" v-model="age"  />
    </p>
  </main>
</template>
