<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamList from '@/components/Teams/TeamList.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js';
import MyModal from '@/components/MyModal.vue'
import { ref } from 'vue';

let team = useTeamStore();

team.fillUp();

// Simulate changing a state, comment out to stop behavior
setTimeout(() => {
  team.grow(24);
}, 2000);

let showModal = ref(false);
</script>

<template>
  <TeamHeader @add-member="showModal = true"></TeamHeader>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamList />
  </div>

  <TeamFooter />

  <MyModal
    :show="showModal"
    @close="showModal = false"
  />
</template>
