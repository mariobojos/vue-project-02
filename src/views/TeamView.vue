<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamList from '@/components/Teams/TeamList.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js';

let team = useTeamStore();

team.fillUp();
</script>

<template>
  <TeamHeader :team="team"></TeamHeader>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamList :team="team" />
  </div>

  <TeamFooter :team="team" />
</template>
