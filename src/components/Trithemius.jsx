import React, { useState } from "react";
import { trithemiusHelper } from "../helpers/trithemiusHelpers";
import { CipherForm } from "./layouts/CipherForm";
import { SlideButton } from "./ui/SlideButton";
import { TextInput } from "./ui/TextInput";
export const Trithemius = () => {
  const [isDecrypt, setIsDecrypt] = useState(false);
  const [key, setKey] = useState({
    a: "",
    b: "",
    c: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [decryptText, setDecryptText] = useState("");
  const [encryptText, setEncryptText] = useState("");
  const [isQuadro, setIsQuadro] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let txt;
    console.log(encryptText);
    setShowResult(true);
    if (isDecrypt) {
      console.log("decrypt");
      txt = trithemiusHelper(
        decryptText,
        parseInt(key.a),
        parseInt(key.b),
        isQuadro ? parseInt(key.c) : null,
        false
      );
      setResult(txt);
    } else {
      console.log("encrpyt");
      txt = trithemiusHelper(
        encryptText,
        parseInt(key.a),
        parseInt(key.b),
        isQuadro ? parseInt(key.c) : null
      );
      setResult(txt);
    }
    console.log("Result of encrypting: ", txt);
  };
  const handleSetKey = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name, value);
    setKey((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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

  const handleSlide = () => {
    setIsQuadro(!isQuadro);
  };
  return (
    <>
      <CipherForm handleSubmit={handleSubmit} shift={key} isDecrypt={true}>
        <span className="attention">
          *Attention this page for Trithemius cipher*
        </span>
        <div className="flex-row">
          <SlideButton
            onChange={handleSlide}
            id="quadro"
            placeholder="Quadro?"
          />
          <SlideButton
            onChange={slideButton}
            id="decrypt"
            placeholder="Decrypt?"
          />
        </div>
        <TextInput
          placeholder="Set A"
          onChange={handleSetKey}
          value={key.a}
          name="a"
        />
        <TextInput
          placeholder="Set B"
          onChange={handleSetKey}
          value={key.b}
          name="b"
        />
        {isQuadro ? (
          <TextInput
            name="c"
            placeholder="Set c"
            onChange={handleSetKey}
            value={key.c}
          />
        ) : null}
        {!isDecrypt ? (
          <TextInput
            placeholder="Encrypt"
            onChange={saveText}
            value={encryptText}
          />
        ) : (
          <TextInput
            placeholder="Decrypt"
            onChange={saveText}
            value={decryptText}
          />
        )}
      </CipherForm>

      {showResult ? result : null}
    </>
  );
};
