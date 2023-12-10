<script setup>

defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

function update(e) {
  emit('update:modelValue', e.target.value);
}

function onTabPress(e) {
  const textarea = e.target

  // Get caret position
  const val = textarea.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  // Set textarea value to: text before caret + tab + text after caret
  textarea.value = val.substring(0, start) + '\t' + val.substring(end)

  // Put caret at the right position again
  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    @keyup="update"
    v-text="modelValue"
    @keydown.tab.prevent="onTabPress" />
</template>