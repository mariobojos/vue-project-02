export function useStorage() {

  function write(key, value) {
    localStorage.setItem(key, value);
  }

  return { write };
}