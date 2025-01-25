import React from 'react';

import './App.css';
import RefOptimizationExample from './RefOptimizationExample.tsx';
import FocusInput from './FocusInput.tsx';
import LazyLoadingGallery from './LazyloadinImage.tsx';

function App() {
  return (
    <div className="App">
      <RefOptimizationExample />
      <hr />
      <br />
      <FocusInput />

      <hr />
      <br />
      <LazyLoadingGallery />
    </div>
  );
}

export default App;
