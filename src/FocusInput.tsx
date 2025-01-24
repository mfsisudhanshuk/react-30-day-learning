import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="space-y-4">
      <input ref={inputRef} placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
