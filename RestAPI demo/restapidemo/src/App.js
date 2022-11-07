import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("getting data from:::", response.data);
        setData(response.data)
      })
      .catch((error) => console.log(error));
  });

  const arr = data.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>{arr}</tbody>
      </table>
    </div>
  );
}

export default App;
