import React, { useState } from "react";
import { decrypt, encrypt } from "../helpers/ceaserHelpers";
import { CipherForm } from "./layouts/CipherForm";
import { CipherResult } from "./layouts/CipherResult";
import { SlideButton } from "./ui/SlideButton";
import { TextInput } from "./ui/TextInput";

export const Ceaser = () => {
  const [isDecrypt, setIsDecrypt] = useState(false);
  const [decryptText, setDecryptText] = useState("");
  const [ecnryptText, setEcnryptText] = useState("");
  const [shift, setShift] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [decryptMass, setDecryptMass] = useState([]);

  const handleSetShift = (e) => {
    setShift(parseInt(e.target.value));
  };
  const slideButton = () => {
    setShowResult(false);
    setIsDecrypt(!isDecrypt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDecrypt) {
      const text = decrypt(decryptText);
      setShowResult(true);
      setDecryptMass(text);
    } else {
      const text = encrypt(ecnryptText, shift);
      setEcnryptText(text);
      setDecryptText(text);
      setShowResult(true);
    }
  };

  const saveText = (e) => {
    setShowResult(false);
    if (isDecrypt) {
      setDecryptText(e.target.value);
    } else {
      setEcnryptText(e.target.value);
    }
  };

  return (
    <>
      <CipherForm
        isDecrypt={isDecrypt}
        handleSetShift={handleSetShift}
        handleSubmit={handleSubmit}
        shift={shift}
      >
        <SlideButton
          onChange={slideButton}
          id="decrypt"
          placeholder="Decrypt?"
        />
        {isDecrypt ? (
          <TextInput
            placeholder="Decrypt"
            onChange={saveText}
            value={decryptText}
          />
        ) : (
          <TextInput
            placeholder="Encrypt"
            onChange={saveText}
            value={ecnryptText}
          />
        )}
      </CipherForm>

      {showResult ? (
        <CipherResult
          isDecrypt={isDecrypt}
          data={decryptMass}
          encryptText={ecnryptText}
          shift={shift}
        />
      ) : null}
    </>
  );
};
