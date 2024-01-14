<script setup>
  defineProps({
    show: Boolean
  })
</script>

<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <header>header</header>
      <div>body</div>
      <footer>
        <p>footer test</p>
        <button @click="$emit('close')">Close</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  inset: 0;
  position: fixed;
}

.modal-container {
  background-color: whitesmoke;
  padding: 1rem;
  max-width: 500px;
  width: 80vw;
}
</style>