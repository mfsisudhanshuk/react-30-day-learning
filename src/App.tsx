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







































//////////


// import React, { createContext, useContext, useState } from "react";

// // Create Context
// const ConfigContext = createContext();

// // Provider Component
// export const ConfigProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");
//   const [layout, setLayout] = useState("grid");
//   const [isFeatureEnabled, setFeatureEnabled] = useState(true);

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
//   const toggleLayout = () => setLayout(layout === "grid" ? "list" : "grid");
//   const toggleFeature = () => setFeatureEnabled((prev) => !prev);

//   const value = {
//     theme,
//     toggleTheme,
//     layout,
//     toggleLayout,
//     isFeatureEnabled,
//     toggleFeature,
//   };

//   return (
//     <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
//   );
// };

// // Custom Hook
// export const useConfig = () => useContext(ConfigContext);

// // Example Component
// const Dashboard = () => {
//   const { theme, toggleTheme, layout, toggleLayout, isFeatureEnabled, toggleFeature } =
//     useConfig();

//   return (
//     <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
//       <h1>Dynamic Configuration Example</h1>
//       <button onClick={toggleTheme}>Switch Theme</button>
//       <p>Current Theme: {theme}</p>

//       <button onClick={toggleLayout}>Switch Layout</button>
//       <p>Current Layout: {layout}</p>

//       <button onClick={toggleFeature}>
//         {isFeatureEnabled ? "Disable" : "Enable"} Feature
//       </button>
//       <p>Feature Status: {isFeatureEnabled ? "Enabled" : "Disabled"}</p>
//     </div>
//   );
// };

// // App Component
// const App = () => (
//   <ConfigProvider children={undefined}>
//     <Dashboard />
//   </ConfigProvider>
// );

// export default App;
