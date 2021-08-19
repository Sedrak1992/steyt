import React, { useState } from "react";
import "./App.css";

function App() {
  const [cancat, setCancat] = useState([1, 2, 3]);
  const f = () => {
    setCancat(cancat.concat("55"));
  };
  return (
    <div className="App" >
      <div className="App1">
        {cancat.map((item) => (
          <div
            style={{
              border: "1px solid red",
              margin: "10px",
              width: "80px",
              height: "40px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={f}> Click me + </button>
    </div>
  );
}

export default App;
