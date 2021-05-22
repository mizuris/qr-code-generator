import React from "react";
import "./App.css";
import CodeGenerator from "./Components/CodeGenerator";
import CodeReader from "./Components/CodeReader";

function App() {
  return (
    <div className="App">
      <header>
        <h1>QRCode center</h1>
        <h2>All in one place</h2>
      </header>
      <CodeGenerator />
      <CodeReader />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
