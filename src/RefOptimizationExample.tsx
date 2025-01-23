import React, { useRef, useState } from "react";

const RefOptimizationExample = () => {
  const inputRef = useRef(null); // Reference to the input element
  const counterRef = useRef(0); // Persistent value that doesn't trigger re-renders
  const [value, setValue] = useState(""); // State to track input value

  // Focus the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Increment the counter without causing a re-render
  const incrementCounter = () => {
    counterRef.current += 1;
    console.log("Counter value:", counterRef.current); // Logs updated value
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">useRef Hook Optimization</h1>

      {/* Input element with reference */}
      <input
        ref={inputRef}
        type="text"
        className="border border-gray-300 rounded px-2 py-1 mb-4"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />

      <div className="space-x-4">
        <button
          onClick={focusInput}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>

        <button
          onClick={incrementCounter}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increment Counter
        </button>
      </div>

      <div className="mt-4">
        <p>Counter Value (Check console): {counterRef.current}</p>
        <p>Input Value: {value}</p>
      </div>
    </div>
  );
};

export default RefOptimizationExample;
