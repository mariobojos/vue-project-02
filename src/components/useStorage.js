import { ref, watch } from 'vue'

export function useStorage(key, fieldValue = null) {

  let storageValue = read()

  if (storageValue) {
     fieldValue = ref(storageValue);
  } else {
     fieldValue = ref(fieldValue);

     write();
  }

  watch(fieldValue, write, { deep: true });

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  function write() {
    if (fieldValue.value === '' || fieldValue.value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(fieldValue.value))
    }
  }

  return fieldValue;
}