import React, { useState } from "react";
import Component from "./Todo";
import "./App.css";
import "./css/Todo.css";
import Todo from "./Todo";

function App() {
  const [addTodo, setAddTodo] = useState([1, 2, 3]);
  const [inputValue, setInputValue] = useState("");

  const deleteTodus = (i) => {
    setAddTodo((currentItems) =>
      currentItems.filter((item, index) => index !== i)
    );
  };

  const addTodos = (event) => {
    if (inputValue !== "") {
      setAddTodo(addTodo.concat([inputValue]));
      setInputValue("");
    } else {
      alert("enter input value");
    }
  };

  return (
    <div className="App">
      <div className="App1">
        {addTodo.map((item, i) => (
          <Todo key={i} item={item} id={i} deleteTodus={deleteTodus} />
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
          onClick={addTodos}
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
