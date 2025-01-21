## useCallback 

The `useCallback` hook in React is used to memoize (or cache) a function definition between re-renders . This can be particularly useful for optimizing performance in certain scenarios.

Here's a breakdown of what `useCallback` does and its use cases:

1. Purpose:

1. `useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed .
2. It helps in preventing unnecessary re-renders of child components that depend on callback functions.


2. Use cases:

1. When passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
2. When you want to avoid recreating functions on every render, especially if those functions are used in useEffect dependencies of child components.

In this example:

1. We have a main `CallbackExample` component and a child `ExpensiveComputationComponent`.
2. The `ExpensiveComputationComponent` is wrapped in `React.memo()`, which means it will only re-render if its props change.
3. We use `useCallback` to memoize the `compute` function that we pass to `ExpensiveComputationComponent`. This function depends on the `count` state.
4. The `memoizedCallback` will only be recreated when `count` changes, not when `otherCount` changes.
5. This setup ensures that `Expensive`

# Key Differences: `useCallback` vs `React.memo`

| **Feature**         | **`useCallback`**                                            | **`React.memo`**                                  |
|---------------------|-------------------------------------------------------------|--------------------------------------------------|
| **Purpose**         | Memoizes functions to maintain reference equality.          | Memoizes the rendered output of a component.     |
| **Optimization Scope** | Used within a component to avoid recreating functions.       | Used on components to avoid unnecessary re-renders. |
| **Usage**           | Applied to functions passed as props or used as dependencies. | Applied to entire components.                   |
| **Prevents**        | New function references on every render.                    | Re-rendering of components with unchanged props. |
| **Dependencies**    | Requires a dependency array to determine when to update the memoized function. | Re-renders based on shallow comparison of props. |