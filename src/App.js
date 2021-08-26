import React, { useState } from "react";
import "./App.css";

function App() {
  const [cancat, setCancat] = useState([1, 2, 3]);
  const [inputValue, setInputValue] = useState("");

  const deleteItem = (i) => {
    setCancat((currentItems) =>
      currentItems.filter((item, index) => index !== i)
    );
  };
  const f = (event) => {
    if (inputValue !== "") {
      setCancat(cancat.concat([inputValue]));
      setInputValue("");
    } else {
      alert('enter input value')
    }
  };

  return (
    <div className="App">
      <div className="App1">
        {cancat.map((item, i) => (
          <div
            style={{
              border: "1px solid red",
              margin: "10px",
              width: "80px",
              height: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            key={i}
          >
            <div> {item}</div>
            <div>
              <button onClick={() => deleteItem(i)}> X </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={f}> Add ++</button>
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
