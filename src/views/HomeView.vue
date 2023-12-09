<script setup>
import { ref } from 'vue'

const textarea = ref(null)

function onKeyTabDown(e) {
  const t = textarea.value

  // Get caret position
  const val = t.value
  const start = t.selectionStart
  const end = t.selectionEnd

  // Set textarea value to: text before caret + tab + text after caret
  t.value = val.substring(0, start) + '\t' + val.substring(end)

  // Put caret at the right position again
  t.selectionStart = t.selectionEnd = start + 1

  e.preventDefault()
}
</script>

<template>
  <main>
    <textarea ref="textarea" @keydown.tab="onKeyTabDown" style="width: 500px; height: 100%;">Hello, world!</textarea>
  </main>
</template>
