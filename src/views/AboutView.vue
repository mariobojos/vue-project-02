<script setup>
import { useFlash } from '@/composables/useFlash.js';
import { counter } from '../stores/counterStore.js'

const { flash } = useFlash();
</script>

<template>
  <main>
    <h1>This is an about page. The current count is {{ counter.count }}.</h1>

    <p>
      <button @click="flash('Yey', 'Hello from About page!')">Click here</button>
    </p>
  </main>
</template>

