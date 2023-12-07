<script setup>
import { useFlash } from '@/composables/useFlash.js';

const { flash } = useFlash();
</script>

<template>
  <main>
    <h1>This is a contact page</h1>

    <p>
      <button @click="flash('Oops','Hello from contact page!', 'error')">Click here</button>
    </p>
  </main>
</template>

