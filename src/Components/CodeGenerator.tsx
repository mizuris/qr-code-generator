import React, { FormEvent, useState } from "react";
import QRCode from "qrcode";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={qrText} onChange={(e) => setQrText(e.target.value)} />
        <input type="submit" value="Generate code" />
      </form>
      {qrUrl ? (
        <a href={qrUrl} download={qrText}>
          <img src={qrUrl} alt={qrText} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default CodeGenerator;
