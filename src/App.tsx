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
        <h4 className="text-muted">Scan and generate your QR codes!</h4>
      </header>
      <Button className="switch-button" onClick={() => switchDisplay()}>
        Switch to {displayComponent === "generator" ? "reader" : "generator"}
      </Button>
      <Container className="App-content">
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
