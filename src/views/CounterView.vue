<script setup>
import { counter } from '@/stores/counterStore.js';


</script>

<template>
  <main>
    <p v-text="counter.count" />
    <button @click="counter.increment()">Increment</button>
  </main>
</template>
