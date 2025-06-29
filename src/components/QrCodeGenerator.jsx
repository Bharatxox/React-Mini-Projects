import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [error, setError] = useState("");

  const validURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleGenerate = () => {
    if (!validURL(input)) {
      setError("Please enter a valid URL (e.g., https://example.com)");
      setQrValue("");
    } else {
      setError("");
      setQrValue(input.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] font-poppins">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg text-center space-y-5">
        <h1 className="text-2xl font-bold text-purple-700">
          QR Code Generator
        </h1>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {error && <p className="text-red-500 text-[12px] -mt-2">{error}</p>}

        <button
          onClick={handleGenerate}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
        >
          Generate QR
        </button>

        {qrValue && (
          <div className="flex justify-center pt-4 mb-5">
            <a href={qrValue} target="_blank" rel="noopener noreferrer">
              <QRCodeSVG
                value={qrValue}
                size={180}
                className="cursor-pointer"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
