# vue-project-02

My follow-along to the Laracast (https://laracasts.com/series/learn-vue-3-step-by-step) tutorial part 2.

The first three sections are in the main branch while succeeding topics are branched out.

Covered so far:

## Section 6. The Composition API
1. New project
   * Run npm `init vue@latest`
   * NOTES: In the prompt that follows, answer Yes to Router, ESLint, and Prettier. The rest of the options should be NO fornow.
2. Comparison between Options API and Component API
3. Introduction to Composable
   * Use sweetalert plugin as first composable example
4. Composable with Local Storage
5. Reusable component

## Section 7. Managing State
1. Dependency Injection with Provide and Inject
2. Store State - another state management for small to medium projects
3. Pinia - Another state management for medium to large projects

## Section 8. Team Dashboard Execise
1. Add Team view with components (TeamHeader, TeamFooter, TeamList, TeamMember)
2. Use Pinia for state management
3. Implement actions to:
   * Apply 3 methods for updating state
   * Simulate updating state 
4. Implement Pinia Getter (computed) 

## Section 9. Transitions, Teleports, Tips
1. Add a custom modal
2. Apply animation with Vue built-in Transition component
   1. Use of data attributes 
      1. **enter-from-class** is the start of the transition when showing a component
      2. **enter-to-class** is the end of the transition when showing a component
      3. **leave-from-class** is the start of the transition when hiding the component
      4. **leave-to-class** is the end of the transition animation when hiding the component
   2. Use of CSS classes
      1. First, add a name to `<Transition>`, i.e. `<Transition name="modal">`
      2. In the `<style>` section:
      ```
      .modal-enter-from { opacity: 0; }
      .modal-enter-to { opacity: 100; }
      
      # or with Tailwind CSS
      .modal-enter-from {
         @apply opacity-0
      }
      ``` 
3. Apply Vue built-in Teleport component to move the affected child components somewhere in the DOM.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
