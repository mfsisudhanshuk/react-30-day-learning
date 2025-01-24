import React, { useRef, useState } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFocus = () => {
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        setErrorMessage("Input field is empty. Please enter some text.");
        inputRef.current.focus();
      } else {
        setErrorMessage("");
        alert("Input is not empty");
      }
    }
  };

  return (
    <div className="space-y-4">
      <input ref={inputRef} placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus Input</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}