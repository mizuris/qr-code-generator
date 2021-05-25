import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import CodeGenerator from "./Components/CodeGenerator/CodeGenerator";
import CodeReader from "./Components/CodeReader/CodeReader";
import { Button } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [displayComponent, setDisplayComponent] = useState("generator");

  const switchDisplay = () => {
    displayComponent === "generator"
      ? setDisplayComponent("reader")
      : setDisplayComponent("generator");
  };

  return (
    <div className="App p-0 m-0">
      <Header />
      <div className="p-2">
        <Button
          className="switch-button ml-auto mr-auto mb-3"
          variant="dark"
          onClick={() => switchDisplay()}
        >
          <AiOutlineReload /> Switch to{" "}
          {displayComponent === "generator" ? "reader" : "generator"}
        </Button>
      </div>
      <main className="main-content">
        {displayComponent === "generator" ? <CodeGenerator /> : <CodeReader />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
