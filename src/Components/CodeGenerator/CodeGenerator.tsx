import React, { FormEvent, useState, useRef } from "react";
import QRCode from "qrcode";
import { Button, Form } from "react-bootstrap";

function CodeGenerator() {
  const [qrText, setQrText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(qrText);
      setQrUrl(response);
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await generateQRCode();
    setQrText("");
  };

  return (
    <>
      <Form className="generator-form" onSubmit={handleSubmit}>
        <Form.Control
          className="generator-input"
          type="text"
          value={qrText}
          placeholder="Text to convert"
          onChange={(e) => setQrText(e.target.value)}
        />
        <Button className="generator-button" type="submit" variant="warning">
          Generate
        </Button>
      </Form>
      <div className="generator-result" key={qrUrl}>
        {qrUrl ? (
          <>
            <a href={qrUrl} download={qrText}>
              <img className="generator-result-img" src={qrUrl} alt={qrText} />
            </a>
            <p className="generator-result-text text-muted">
              Click the code to dowload it.
            </p>
            <div ref={scrollRef}></div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CodeGenerator;
