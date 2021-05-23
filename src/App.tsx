import React, { useState } from "react";
import "./App.css";
import CodeGenerator from "./Components/CodeGenerator";
import CodeReader from "./Components/CodeReader";
import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  const [displayComponent, setDisplayComponent] = useState("generator");

  const switchDisplay = () => {
    displayComponent === "generator"
      ? setDisplayComponent("reader")
      : setDisplayComponent("generator");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QRCode Center</h1>
        <h2>All in one place</h2>
      </header>
      <Button onClick={() => switchDisplay()}>
        Switch to {displayComponent === "generator" ? "reader" : "generator"}
      </Button>
      <Container>
        <Row>
          {displayComponent === "generator" ? (
            <Col>
              <CodeGenerator />
            </Col>
          ) : (
            <Col>
              <CodeReader />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
