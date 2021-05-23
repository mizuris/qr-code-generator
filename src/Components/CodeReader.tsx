import React, { useState } from "react";
import QrReader from "react-qr-reader";

function CodeReader() {
  const [scan, setScan] = useState({
    result: "",
    error: "",
  });

  const [options, setOptions] = useState({
    legacyMode: false,
    resolution: 600,
    delay: 500,
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
      <div className="reader-options">
        <label htmlFor="resolution">Set resolution</label>
        <input
          name="resolution"
          type="number"
          value={options.resolution}
          min="100"
          max="1000"
          step="10"
          onChange={(e) =>
            setOptions({
              ...options,
              [e.target.name]: parseInt(e.target.value),
            })
          }
        />
      </div>
      <QrReader
        className="reader-content"
        legacyMode={options.legacyMode}
        resolution={options.resolution}
        delay={options.delay}
        facingMode={"environment"}
        onScan={handleScan}
        onError={handleError}
      />
      <p className="reader-result">Scanned code result: {scan.result}</p>
    </div>
  );
}

export default CodeReader;
