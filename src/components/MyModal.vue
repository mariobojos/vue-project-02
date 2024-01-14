<script setup>
  defineProps({
    show: Boolean
  })
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class=" opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <header class="modal-header">
          <slot name="header"></slot>
        </header>

        <div class="modal-body">
          <slot></slot>
        </div>

        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
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
  border-radius: 8px;
  padding: 1rem;
  max-width: 500px;
  width: 80vw;
}

.modal-header {
  font-weight: bold;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-top: 0.4rem;
  margin-bottom: 0.41rem;
}

.modal-footer {
  border-top: 1px solid #ddd;
  display: flex;
  font-size: 0.8rem;
  margin-top: 3rem;
  padding-top: 0.5rem;
}

.modal-footer button {
  background-color: #dddddd;
  border-radius: 13px;
  font-weight: bold;
  padding: 0.25rem 0.75rem;
}

.modal-footer button:hover {
  background-color: #c6c4c4;
  font-weight: bolder;
}
</style>