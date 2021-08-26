import React, { useState } from "react";
import Component from "./Component";
import "./App.css";
import "./css/Todo.css";

function App() {
  const [addTodo, setAddTodo] = useState([1, 2, 3]);
  const [inputValue, setInputValue] = useState("");

  const deleteItem = (i) => {
    setAddTodo((currentItems) =>
      currentItems.filter((item, index) => index !== i)
    );
  };
  const deleteTodo = (event) => {
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
          <Component key={i} item={item} id={i} deleteItem={deleteItem}/>
        ))}
      </div>
      <button onClick={deleteTodo}> Add ++</button>
      <div style={{ margin: "20px auto", display: "babel" }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
