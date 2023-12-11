<script setup>
import QuizHeader from '@/components/Quiz/QuizHeader.vue'
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'
import { provide } from 'vue';

const props = defineProps({ quiz: Object });

provide('quiz', props.quiz);
</script>

<template>
  <section>
    <QuizHeader />

    <QuizQuestion />

    <QuizFooter />
  </section>
</template>