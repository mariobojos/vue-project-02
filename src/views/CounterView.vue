<script setup>
import { useCounterStore } from '@/stores/CounterStore.js';

let counter = useCounterStore();
</script>

<template>
  <main>
    <h1 v-text="counter.count" />
    <button
      :disabled="!counter.remaining"
      @click="counter.increment()"
    >
      Increment {{ counter.remaining }} remaining
    </button>
    <button
      :disabled="counter.count <= 0"
      @click="counter.decrement()"
    >
      Decrement {{ counter.remaining }} remaining
    </button>
  </main>
</template>
