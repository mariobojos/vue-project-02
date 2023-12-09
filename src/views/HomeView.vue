<script setup>

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
  <main>
    <textarea @keydown.tab.prevent="onTabPress" style="width: 500px; height: 100%;">Hello, world!</textarea>
  </main>
</template>
