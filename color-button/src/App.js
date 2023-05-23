import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  let newColor = btnColor === "red" ? "blue" : "red";

  return (
    <button
      style={{ backgroundColor: btnColor }}
      onClick={() => {
        setBtnColor(newColor);
      }}
    >
      change to {newColor}
    </button>
  );
}

export default App;
