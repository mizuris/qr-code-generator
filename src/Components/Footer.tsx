import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="App-footer">
      <Container>
        <Button
          href="https://www.facebook.com/piotr.bator.33/"
          target="blank"
          className="m-1 footer-button"
          variant="outline-dark"
        >
          <FaFacebookF />
        </Button>
        <Button
          href="https://github.com/mizuris/car-wallet-react"
          target="blank"
          className="m-1 footer-button"
          variant="outline-dark"
        >
          <FaGithub />
        </Button>
        <Button
          href="https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/"
          target="blank"
          className="m-1 footer-button"
          variant="outline-dark"
        >
          <FaLinkedinIn />
        </Button>
        <p className="text-muted footer-text">
          Author: <strong>Piotr Bątor.</strong>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
