## Lazy loading

Lazy loading is a technique used to defer the loading of non-critical resources at page load time. In React, it specifically refers to the practice of dynamically importing components only when they are needed, which can significantly improve the performance of your application .


### Let's break down this example:

1. We use the `lazy` function to dynamically import the `HeavyComponent`. This means the component won't be loaded until it's actually needed .
2. The `Suspense` component is used to specify a loading state while the lazy component is being loaded. In this case, we're showing a simple "Loading..." message .
3. We use a state variable `showHeavyComponent` to control whether the heavy component should be rendered.
4. When the button is clicked, it toggles the `showHeavyComponent` state, which in turn triggers the lazy loading of the `HeavyComponent`.


### Key Points to note:-

- The `HeavyComponent` is not included in the initial bundle. It's only loaded when the user clicks the button to show it

- If the network is slow, users will see the "Loading..." message while the component is being fetched.

- This pattern is particularly useful for large applications where certain components or features are not needed immediately or are used infrequently.


### Benefits of using lazy loading -

- Improved Initial load time.

- Better performance.

- Efficient resource usage - It allows you to load resources only when they’re needed. Which can be more

- Efficient in terms of bandwidth and memory usage

Note :- Remember,while lazy loading can greatly improve performance , it should be used judiciously. Overusing it for small components that are frequently used might actually harm performance due to the overhead of additional network request
