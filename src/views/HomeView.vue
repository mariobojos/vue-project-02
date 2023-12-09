<script setup>
  import { useStorage } from '@/components/useStorage.js';

  let food = useStorage('food', 'inasal');

  let age = useStorage('age',  50);
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
