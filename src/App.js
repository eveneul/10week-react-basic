import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>total click: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click me</button>
    </div>
  );
}

export default App;
