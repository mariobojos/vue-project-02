<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamList from '@/components/Teams/TeamList.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js';

let team = useTeamStore();

team.fillUp();

// Comment out below to simulate changing a state
setTimeout(() => {
  team.grow(14);
}, 2000);
</script>

<template>
  <TeamHeader></TeamHeader>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamList />
  </div>

  <TeamFooter />
</template>
