import React, { useState } from "react";
import "./App.css";
import "./css/Todo.css";
import Todo from "./Todo.js";

function App() {
  const [todos, setTodos] = useState([1, 2, 3]);
  const [inputValue, setInputValue] = useState("");

  const deleteTodo = (i) => {
    setTodos((currentItems) =>
      currentItems.filter((item, index) => index !== i)
    );
  };

  const addTodo = (event) => {
    if (inputValue !== "") {
      setTodos(todos.concat([inputValue]));
      setInputValue("");
    } else {
      alert("enter input value");
    }
  };

  return (
    <div className="App">
      <div className="App1">
        {todos.map((item, i) => (
          <Todo key={i} item={item} id={i} deleteTodo={deleteTodo} />
        ))}
      </div>
      <div
        style={{
          width: "40%",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          onClick={addTodo}
          style={{ textAlign: "center", width: "60px" }}
        >
          {" "}
          Add ++{" "}
        </button>
        <div style={{ margin: "20px auto" }}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
