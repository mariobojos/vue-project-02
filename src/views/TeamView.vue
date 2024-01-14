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
  >
    <template #header>
      Add Team Member
    </template>

    <template #default>
      <p>Add a team member to your team</p>

      <form class="mt-2">
        <div class="flex gap-2">
          <input
            class="flex-1 px-1.5"
            type="email"
            placeholder="Email"
          />

          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Add</button>
        </div>
      </form>

    </template>
  </MyModal>

</template>
