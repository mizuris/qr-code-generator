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
    <div className="content-container">
      <QrReader
        className="reader-content ml-auto mr-auto"
        legacyMode={options.legacyMode}
        resolution={options.resolution}
        delay={options.delay}
        facingMode={"environment"}
        onScan={handleScan}
        onError={handleError}
      />
      {scan.result ? (
        <div className="reader-result" key={scan.result}>
          <h6 className="text-muted">Scanned code result:</h6>
          <a className="reader-result-text" href={scan.result} target="blank">
            {scan.result}
          </a>
        </div>
      ) : (
        <div className="reader-no-result">
          <h6 className="text-muted">Scan QR code to get result.</h6>
        </div>
      )}
    </div>
  );
}

export default CodeReader;
