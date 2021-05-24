import React, { useState } from "react";
import "./App.css";
import CodeGenerator from "./Components/CodeGenerator";
import CodeReader from "./Components/CodeReader";
import { Container, Row, Button } from "react-bootstrap";
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
    <Container className="App p-0 m-0">
      <Header />
      <Row className="p-2">
        <Button
          className="switch-button ml-auto mr-auto mb-3"
          variant="dark"
          onClick={() => switchDisplay()}
        >
          Switch to {displayComponent === "generator" ? "reader" : "generator"}
        </Button>
      </Row>
      <Row className="main-content">
        {displayComponent === "generator" ? <CodeGenerator /> : <CodeReader />}
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
