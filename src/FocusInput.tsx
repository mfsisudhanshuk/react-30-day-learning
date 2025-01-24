import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        inputRef.current.focus();
      } else {
        alert("Input is not empty");
      }
    }
  };

  return (
    <div className="space-y-4">
      <input ref={inputRef} placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
