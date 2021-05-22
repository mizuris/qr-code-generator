import React, { useState } from "react";
import QrReader from "react-qr-reader";

function CodeReader() {
  const [scan, setScan] = useState({
    result: "",
    error: "",
  });

  const handleScan = (data: string | null) => {
    if (data) {
      setScan({ ...scan, result: data });
    }
  };

  const handleError = (error: string) => {
    setScan({ ...scan, error });
  };

  return (
    <div className="reader-container">
      <QrReader
        delay={300}
        style={{ width: "100%" }}
        onScan={handleScan}
        onError={handleError}
      />
      <p className="reader-result">Scanned code result: {scan.result}</p>
    </div>
  );
}

export default CodeReader;
