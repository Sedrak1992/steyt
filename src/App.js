import React, { useState } from "react";
import "./App.css";

function App() {
  const [cancat, setCancat] = useState([1, 2, 3]);
  const f = () => {
    setCancat(cancat.concat("55"));
  };
  // const a = (id) => {

  // }

  const deleteItem = (i) => {
    const newItems = [...cancat];
    newItems.splice(i, 1);
    setCancat(newItems);
  };
  return (
    <div className="App">
      <div className="App1">
        {cancat.map((item) => (
          <div
            style={{
              border: "1px solid red",
              margin: "10px",
              width: "80px",
              height: "40px",
              display: "flex",
              justifyContent: 'space-around',
              alignItems: 'center'
              
            }}
          >
            <div>{item}</div>
            <div>
              <button onClick={deleteItem}> X </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={f} style={{ margin: "20px auto" }}>
        {" "}
        Click me +{" "}
      </button>
    </div>
  );
}

export default App;
