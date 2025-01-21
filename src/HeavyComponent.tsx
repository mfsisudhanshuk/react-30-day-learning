import React from 'react';

export default function HeavyComponent() {

  // Simulate some expensive computation
  let result = 0
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }


  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Heavy Component</h2>
      <p>This component is lazy loaded! {result}</p>
    </div>
  );
}
