<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamList from '@/components/Teams/TeamList.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js';

let team = useTeamStore();

team.fillUp();

// Simulate changing a state, comment out to stop behavior
setTimeout(() => {
  team.grow(24);
}, 2000);
</script>

<template>
  <TeamHeader></TeamHeader>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamList />
  </div>

  <TeamFooter />
</template>
