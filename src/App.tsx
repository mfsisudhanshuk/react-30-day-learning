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