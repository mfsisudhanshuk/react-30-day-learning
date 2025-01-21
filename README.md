What is memo and its benefit , example (branch - learning/memo)

Memo is a higher-order component in React that’s used for performance optimization.Its designed to memoize functional components, which means it can prevent unnecessary re-renders of components when their props haven’t changed.

Uses :- 

Performance optimization - It helps reduce unnecessary re-renders, which can improve the overall performance of your react application.
Predictable rendering - It ensures that a component only re-renders when its props change, making the rendering behaviour more predictable.
Reduced Computation - For components with expensive rendering logic , memo can significantly reduce the amount of computation needed.


Summary :- 



`memo` is most effective for components with expensive rendering logic.
When using `memo`, be aware of object and function props. You might need to combine it with `useMemo` and `useCallback` for full effectiveness.
Don't use `memo` indiscriminately. For simple components, the overhead of memoization might be more than the performance gain.
Always measure performance before and after applying `memo` to ensure it's actually improving your application's performance.


Code sample

```javescript

import React, { useState, memo } from "react"

// A simple component that we'll memoize
const ExpensiveComponent = memo(function ExpensiveComponent({ value }: { value: number }) {
  console.log("Rendering ExpensiveComponent")
  // Simulate some expensive computation
  let result = 0
  for (let i = 0; i < 1000000; i++) {
    result += value
  }
  return <div>Result: {result}</div>
})

export default function SimpleExample() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)

  return (
    <div>
      <h2>Simple Memo Example</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setValue(value + 1)}>Change Value: {value}</button>
      <ExpensiveComponent value={value} />
    </div>
  )
}

```
