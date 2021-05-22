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
    <div>
      <QrReader
        delay={300}
        style={{ width: "50%" }}
        onScan={handleScan}
        onError={handleError}
      />
      <p>Scanned code result: {scan.result}</p>
    </div>
  );
}

export default CodeReader;
