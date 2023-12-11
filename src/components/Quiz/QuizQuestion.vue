<script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { ref } from 'vue'

let question1 = ref('Question');
</script>

<template>
  <article style="margin-bottom: 1rem;">
    <TabbableTextarea style="height: 120px; width: 100%" v-model="question1" />
  </article>
</template>