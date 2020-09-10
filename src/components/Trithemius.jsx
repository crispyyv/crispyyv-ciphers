import React, { useState } from "react";
import { encrypt } from "../helpers/trithemiusHelpers";
import { CipherForm } from "./layouts/CipherForm";
import { TextInput } from "./ui/TextInput";
export const Trithemius = () => {
  const [isDecrypt, setIsDecrypt] = useState(false);
  const [key, setKey] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [decryptText, setDecryptText] = useState("");

  const [encryptText, setEncryptText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(encryptText);
    let txt = encrypt(key, encryptText);
    console.log("Result of encrypting: ", txt);
  };
  const handleSetKey = (e) => {
    setKey(parseInt(e.target.value));
  };
  const slideButton = () => {
    setShowResult(false);
    setIsDecrypt(!isDecrypt);
  };
  const saveText = (e) => {
    setShowResult(false);
    if (isDecrypt) {
      setDecryptText(e.target.value);
    } else {
      setEncryptText(e.target.value);
    }
  };
  return (
    <>
      <CipherForm
        handleSubmit={handleSubmit}
        handleSetShift={handleSetKey}
        isDecrypt={isDecrypt}
        slideButton={slideButton}
        shift={key}
      >
        This page about cipher Trithemius
        {!isDecrypt ? (
          <TextInput
            placeholder="Encrypt"
            onChange={saveText}
            value={encryptText}
          />
        ) : null}
      </CipherForm>
    </>
  );
};
