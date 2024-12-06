
// Custom components in React JS 

import React from "react";

function CustomButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", margin: "5px" }}>
      {label}
    </button>
  );
}

export default CustomButton;

import React from "react";
import CustomButton from "./CustomButton";

function App() {
  return (
    <div>
      <h1>Custom Button Example</h1>
      <CustomButton label="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}


// React props

import React from "react";

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

export default Greeting;

import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Tim" />
    </div>
  );
}

// React State Management using React Hook – useState

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;


// React Hook - useEffect

import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array ensures it runs only once.

  return (
    <ul>
      {data.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default FetchData;
