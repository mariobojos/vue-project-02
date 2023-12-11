<script setup>
import QuizHeader from '@/components/Quiz/QuizHeader.vue'
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'

defineProps({ quiz: Object });
</script>

<template>
  <section>
    <QuizHeader />

    <QuizQuestion />

    <QuizFooter :quiz="quiz" />
  </section>
</template>