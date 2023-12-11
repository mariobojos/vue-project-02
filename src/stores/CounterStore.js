import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0
    }
  },

  actions: {
    decrement() {
      if (this.count > 0) this.count--;
    },

    increment() {
      if (this.count < 10) this.count++;
    }
  },

  getters: {
    remaining() {
      return 10 - this.count;
    }
  }

})