import React from 'react';

import './App.css';
import RefOptimizationExample from './RefOptimizationExample.tsx';
import FocusInput from './FocusInput.tsx';

function App() {
  return (
    <div className="App">
      <RefOptimizationExample />
      <hr />
      <br />
      <FocusInput />
    </div>
  );
}

export default App;
