import React, { useState } from "react";
import './App.css';

function App() {
  const [cancat,setCancat] = useState([1,2,3]);

  return (
    <div className="App">
      <div>
        {cancat.map((item) => (
          <div style={{border: "1px solid red",margin:"10px", widows:"60px",height:"40px"}}>{item}</div>
        ))}
      </div>
     <button> + </button>    
    </div>
  );
}

export default App;
