<script setup>
import { onMounted, ref } from 'vue'

  let textarea = ref(null);

console.log(textarea.value); // WiIll display null since textarea is not yet mounted
console.log(textarea); // Delay display, it will show the properties of ref textarea

onMounted(() => {
    console.log(textarea.value);  // Better yet, display the HTML textarea at onMounted
    console.log(textarea.value.value);  // Display the ref's textarea value

    textarea.value.addEventListener("keydown", (e) => {
      const t = textarea.value;

      // Check if tab key was pressed
      if (e.keyCode === 9) {
        // Get caret position
        const val = t.value;
        const start = t.selectionStart;
        const end = t.selectionEnd;

        // Set textarea value to: text before caret + tab + text after caret
        t.value = val.substring(0, start) + "\t" + val.substring(end);

        // Put caret at the right position again
        t.selectionStart = t.selectionEnd = start + 1;

        e.preventDefault();
      }
    });
  });
</script>

<template>
  <main>
    <textarea ref="textarea" style="width: 500px; height: 100%;">Hello, world!</textarea>
  </main>
</template>
