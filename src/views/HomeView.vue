<script setup>
import QuizTime from '@/components/Quiz/QuizTime.vue'
</script>

<template>
  <main>
    <QuizTime :quiz="{ name: 'My First Quiz', questions: [] }" />
  </main>
</template>
