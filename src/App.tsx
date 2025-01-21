import React, { useState, useCallback } from "react"


// This is a child component that receives a callback
const ExpensiveComputationComponent = React.memo(({ compute }) => {
  console.log("ExpensiveComputationComponent rendered")
  return <button onClick={compute}>Compute</button>
})

export default function CallbackExample() {
  const [count, setCount] = useState(0)
  const [otherCount, setOtherCount] = useState(0)

  // This callback is memoized and will only change if `count` changes
  const memoizedCallback = useCallback(() => {
    console.log(`Expensive computation performed with count: ${count}`)
    // Imagine some expensive computation here
  }, [count])

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">useCallback Example</h1>
      <p>Count: {count}</p>
      <p>Other Count: {otherCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>
      <ExpensiveComputationComponent compute={memoizedCallback} />
    </div>
  )
}

