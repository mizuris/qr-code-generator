import React, { FormEvent, useState } from "react";
import QRCode from "qrcode";
import { Button, Form } from "react-bootstrap";

function CodeGenerator() {
  const [qrText, setQrText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(qrText);
      setQrUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    generateQRCode();
  };

  return (
    <div className="generator-container">
      <Form className="generator-form" onSubmit={handleSubmit}>
        <Form.Label>Get your QR code</Form.Label>
        <Form.Control
          className="generator-input"
          type="text"
          value={qrText}
          placeholder="Text to convert"
          onChange={(e) => setQrText(e.target.value)}
        />
        <Button type="submit" variant="success">
          Generate code
        </Button>
      </Form>
      {qrUrl ? (
        <a href={qrUrl} download={qrText}>
          <img className="generator-result" src={qrUrl} alt={qrText} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default CodeGenerator;
