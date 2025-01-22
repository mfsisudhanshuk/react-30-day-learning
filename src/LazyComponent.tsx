import React, { useState, lazy, Suspense } from "react"
// import HeavyComponent from "./HeavyComponent.tsx"
// Lazy load the HeavyComponent
const HeavyComponent = lazy(() => import("./HeavyComponent.tsx"))

export default function LazyLoadingExample() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false)

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Lazy Loading Example</h1>
      <button onClick={() => setShowHeavyComponent(!showHeavyComponent)}>
        {showHeavyComponent ? "Hide" : "Show"} Heavy Component
      </button>

      {showHeavyComponent && (
         <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
         </Suspense>
      )}
    </div>
  )
}

