import React from "react";

export const CipherResult = ({ isDecrypt, data, encryptText, shift }) => {
  return (
    <div className="result">
      <h2>Result of {isDecrypt ? "decrypting: " : "encrypting: "}</h2>

      {isDecrypt ? (
        <ul className="result__list">
          {data.map((val, idx) => (
            <li
              key={idx}
              className={
                shift === 26 - idx
                  ? "result__correct"
                  : 26 - idx === 26
                  ? "result__correct"
                  : null
              }
            >
              <strong>Shift alphabet on {26 - idx} symbol</strong>: {val}
            </li>
          ))}
        </ul>
      ) : (
        <p>{encryptText}</p>
      )}
    </div>
  );
};
