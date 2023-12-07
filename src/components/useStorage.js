import { ref, watch } from 'vue'

export function useStorage(key) {

  let storageValue = localStorage.getItem(key);

  let fieldValue = ref(storageValue);

  watch(fieldValue, () => {
    if (fieldValue.value === '') {
      localStorage.removeItem(key);
    } else {
      write();
    }
  });

  function write() {
    localStorage.setItem(key, fieldValue.value);
  }

  return fieldValue;
}