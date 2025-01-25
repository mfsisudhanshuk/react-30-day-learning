
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

    return <WrappedComponent {...props} data={data} />; // props is the props of UserListWithData and data is the data fetched from the api
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












































///
// Now you can use UserListWithData as a regular component
/* 
const todoList = ({ data }) => {
    return (
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title} - {todo.completed ? "Done" : "Not Done"}</li>
        ))}
      </ul>
    );
  };

const todoListWithData = withDataFetching(todoList, "https://jsonplaceholder.typicode.com/todos");

*/