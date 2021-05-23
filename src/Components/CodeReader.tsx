import React, { useState } from "react";
import QrReader from "react-qr-reader";

function CodeReader() {
  const [scan, setScan] = useState({
    result: "",
    error: "",
  });

  const options = {
    legacyMode: false,
    resolution: 600,
    delay: 500,
  };

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
      {scan.result ? (
        <div className="reader-result">
          <h6 className="text-muted">Scanned code message:</h6>
          <p className="reader-result-text">{scan.result}</p>
        </div>
      ) : (
        ""
      )}
      <QrReader
        className="reader-content ml-auto mr-auto"
        legacyMode={options.legacyMode}
        resolution={options.resolution}
        delay={options.delay}
        facingMode={"environment"}
        onScan={handleScan}
        onError={handleError}
      />
    </div>
  );
}

export default CodeReader;
