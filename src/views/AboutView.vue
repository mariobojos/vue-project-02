<script setup>
import { useFlash } from '@/composables/useFlash.js';

const { flash } = useFlash();
</script>

<template>
  <main>
    <h1>This is an about page</h1>

    <p>
      <button @click="flash('Yey', 'Hello from About page!')">Click here</button>
    </p>
  </main>
</template>

