##  High Order Components (HOCs) in React

> A High Order Component (HOC) in React is a function that takes a component as input and returns a new component. HOCs are an advanced pattern for reusing component logic and sharing behaviors across multiple components without repeating code.


## Definition

A Hoc essential function

```Javascript
const withExtraLogic = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    // Add additional logic or functionality here
    return <WrappedComponent {...props} />;
  };
};

```


### Why Use HOCs?

1. `Code Reusability`: Extract and reuse common functionality across multiple components.

2. `Separation of Concerns`: Keep components focused on their primary purpose while delegating additional logic to HOCs.

3. `Enhanced Readability`: Simplify component implementations by moving shared logic into HOCs.

### Use Cases

> Access Control (e.g., role-based rendering):

    - Hide or show components based on user permissions.

> Fetching Data:

    - Encapsulate data-fetching logic to keep UI components clean.

> Logging or Debugging:

    - Track component usage or log props for debugging purposes.

> Authentication Wrappers:

    - Redirect unauthenticated users to login pages.

## How to Create and Use HOCs

> Example 1: Adding Extra Props

```javascript

const withExtraProps = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const newProps = { extraInfo: "This is additional information" };
    return <WrappedComponent {...props} {...newProps} />;
  };
};

const BaseComponent = ({ extraInfo }) => {
  return <div>{extraInfo}</div>;
};

const EnhancedComponent = withExtraProps(BaseComponent);

export default EnhancedComponent;


```

```
Output: Displays "This is additional information" by injecting extraInfo into BaseComponent.

```

<hr />


Example 2: Authentication Wrapper

```javascript

import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const isAuthenticated = !!localStorage.getItem("token");

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

const Dashboard = () => {
  return <h1>Welcome to the Dashboard</h1>;
};

const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;

```

```
Use Case: Protecting routes from unauthorized users.

```

Example 3: Data Fetching

```javascript

import React, { useEffect, useState } from "react";

const withDataFetching = (WrappedComponent, apiUrl) => {
  return function EnhancedComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [apiUrl]);

    if (loading) return <p>Loading...</p>;

    return <WrappedComponent {...props} data={data} />;
  };
};

const UserList = ({ data }) => {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const UserListWithData = withDataFetching(UserList, "https://jsonplaceholder.typicode.com/users");

export default UserListWithData;

```

```
Use Case: Encapsulating data fetching logic into a reusable HOC.

```

<hr />

### Best Practices

- Avoid Overuse: Use HOCs judiciously; too many layers can lead to complexity.

- Name the HOC Clearly: Use descriptive names like withAuth or withLogging for clarity.

- Preserve Static Methods: Copy static methods from the wrapped component to the HOC using libraries like hoist-non-react-statics.

- Use HOCs with Functional Components: They work seamlessly with functional components and hooks.

## Conclusion

High Order Components are a powerful tool for sharing logic and behaviors across components in React. While their usage has declined somewhat with the introduction of hooks, they remain valuable in scenarios requiring reusable and composable logic.

> By mastering HOCs, you can:

- Simplify component design.

- Reduce code duplication.

- Improve maintainability.