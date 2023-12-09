<script setup>
import { onMounted, ref } from 'vue'

  let textarea = ref(null);

console.log(textarea.value); // WiIll display null since textarea is not yet mounted
console.log(textarea); // Delay display, it will show the properties of ref textarea

onMounted(() => {
    console.log(textarea.value);  // Better yet, display the HTML textarea at onMounted
    console.log(textarea.value.value);  // Display the ref's textarea value
  });
</script>

<template>
  <main>
    <textarea ref="textarea" style="width: 500px; height: 100%;">Hello, world!</textarea>
  </main>
</template>
