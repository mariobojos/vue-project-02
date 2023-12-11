<script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue';
import { ref } from 'vue'

let comment = ref('What can you say about the place?')

let count = ref(0);
</script>

<template>
  <main>
    <form>
      <TabbableTextarea
        v-model="comment"
        style="width: 100%; height: 400px;" />

      <button @click.prevent="count++">{{ count }}</button>
    </form>
  </main>
</template>
