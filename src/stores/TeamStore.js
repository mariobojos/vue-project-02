import { defineStore } from 'pinia';

export let useTeamStore = defineStore('team',{
  state: () => {
    return {
      name: '',
      spots: 0,
      members: []
    }
  },

  actions: {
    fill() {
      import('@/team.json').then(result => {
        const data = result.default;

        // Method 1 of updating state
        // this.name = data.name;
        // this.spots = data.spots;
        // this.members = data.members;

        // Method 2 of updating state using $patch method
        this.$patch({
          name: data.name,
          spots: data.spots,
          members: data.members
        });
      });
    },

    async fillUp() {
      const result = await import('@/team.json');

      // Method 3 of updating state using $state, which replace the state entirely
      this.$state = result.default;
    },

    grow(spot) {
      this.spots = spot;
    }
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    }
  }
});