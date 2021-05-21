import React, { useState } from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImage(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          if (text) {
            generateQRCode();
          } else {
            console.log("Wpisz cos");
          }
        }}
      >
        Generate code
      </button>
      {image ? (
        <a href={image} download={text}>
          <img src={image} alt={text} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
