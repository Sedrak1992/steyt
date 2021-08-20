import React, { useState } from "react";
import "./App.css";

function App() {
  const [cancat, setCancat] = useState([1, 2, 3]);
  const deleteItem = (i) => {
    setCancat((currentItems) =>
      currentItems.filter((item, index) => index !== i)
    );
  };
const f = (event) => {
    setCancat(cancat.concat([event.target.value]));
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
          >
            <div>{item}</div>
            <div>
              <button onClick={() => deleteItem(i)}> X </button>
            </div>
          </div>
        ))}
      </div>
    <button onClick={f} onChange={f} style={{ margin: "20px auto" }}>
        {" "}
        Click me +{" "}
      </button>
      <input type="text" value={f}/>
    </div>
  );
}


export default App;