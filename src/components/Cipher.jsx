import React, { useState } from "react";
import { decrypt, encrypt, numbers } from "../helpers/cryptoFunction";
export const Cipher = () => {
  const [isDecrypt, setIsDecrypt] = useState(false);
  const [decryptText, setDecryptText] = useState("");
  const [ecnryptText, setEcnryptText] = useState("");
  const [shift, setShift] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [decryptMass, setDecryptMass] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDecrypt) {
      const text = decrypt(decryptText);
      setShowResult(true);
      setDecryptMass(text);
      console.log(decryptMass);
    } else {
      const text = encrypt(ecnryptText, shift);
      setEcnryptText(text);
      setDecryptText(text);
      setShowResult(true);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__choice">
          <div>
            <label htmlFor="isDecrypt">Decrypt?</label>
            <input
              id="isDecrypt"
              type="checkbox"
              placeholder="Decrypt?"
              onChange={() => {
                setShowResult(false);

                setIsDecrypt(!isDecrypt);
              }}
            />
          </div>
          <div className="form__shift">
            <p>Select shift</p>
            <select
              value={shift}
              onChange={(e) => {
                setShift(e.target.value);
              }}
            >
              {numbers.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        {isDecrypt ? (
          <input
            type="text"
            placeholder="Decrypt"
            onChange={(e) => {
              setShowResult(false);

              setDecryptText(e.target.value);
            }}
            value={decryptText}
          />
        ) : (
          <input
            type="text"
            placeholder="Encrypt"
            onChange={(e) => {
              setShowResult(false);

              setEcnryptText(e.target.value);
            }}
            value={ecnryptText}
          />
        )}

        <button className="form__button" type="submit">
          {isDecrypt ? "Decrypt" : "Encrypt"}
        </button>
      </form>

      {showResult ? (
        <>
          <h2>Result of {isDecrypt ? "decrypting" : "encrypting"}</h2>

          {isDecrypt ? (
            <ul className="result">
              {decryptMass.map((val, idx) => (
                <li key={idx}>
                  <strong>Shift alphabet on {26 - idx} symbol</strong>: {val}
                </li>
              ))}
            </ul>
          ) : (
            <p>{ecnryptText}</p>
          )}
        </>
      ) : null}
    </>
  );
};
