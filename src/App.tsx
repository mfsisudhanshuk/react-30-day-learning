import React from "react";
import { ThemeProvider } from "./ThemeProvider.tsx"
import ThemedComponent from "./ThemeComponent.tsx";

const App = () => {
  return (
    <ThemeProvider children={undefined}>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
