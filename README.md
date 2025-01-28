## Context API


A way to pass data through the component tree without having to pass props down manually at every level.

1. Context Creation: 
createContext : Create a context object.
 `export const bicontext = createContext():```

2.Provider : 

Provider : A component that provides the context value to its children.

3. Consumer : Component can access context values using the useContext hooks.

useContext(Consumer) : A hook that allows you to consume a context.


// Setup

1. Creation
```
import React, { createContext } from "react";

const MyContext = createContext(); // Default value can be provided here.


```

2. Provider

```
export const MyProvider = ({ children }) => {
  const sharedState = { user: "John Doe", isLoggedIn: true };

  return (
    <MyContext.Provider value={sharedState}>
      {children}
    </MyContext.Provider>
  );
};


```

3. Consumer 

```

import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const MyComponent = () => {
  const context = useContext(MyContext);

  return <div>User: {context.user}</div>;
};


```

### Best practices 
1. Avoid overuse -  Don't use Context API for all state managementl it's better suited for global or shared state
2. Split context - For large applications, use multiple contexts for different domains (e.g., authentication, theme).
3. Memoize values - Use `useMemo` or `callback` to avoid unnecessary re-renders when the context value changes.




## Primary uses 
1. Avoids props drilling
2. Globals state management
3. Dynamic configureation
4. Dependency Injection