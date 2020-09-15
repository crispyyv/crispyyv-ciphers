import React, { useState } from "react";
import {
  findConstHelper,
  trithemiusHelper,
} from "../helpers/trithemiusHelpers";
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

  const [findText, setFindText] = useState({
    plain: "",
    encrypted: "",
  });
  const [findConst, setFindConst] = useState(false);
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
      if (findConst) {
        const { plain, encrypted } = findText;
        console.log("I WILL FIND YOU");
        const result = findConstHelper(plain, encrypted);
        console.log(result);
        txt = `You'r const: ${result}`;
      } else {
        txt = trithemiusHelper(
          decryptText,
          parseInt(key.a),
          parseInt(key.b),
          isQuadro ? parseInt(key.c) : null,
          false
        );
      }
    } else {
      txt = trithemiusHelper(
        encryptText,
        parseInt(key.a),
        parseInt(key.b),
        isQuadro ? parseInt(key.c) : null
      );
    }
    setResult(txt);
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
    setFindConst(false);
  };
  const saveText = (e) => {
    e.persist();
    setShowResult(false);
    if (isDecrypt) {
      findConst
        ? setFindText((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        : setDecryptText(e.target.value);
    } else {
      setEncryptText(e.target.value);
    }
  };
  console.log(findText);

  const handleSlide = (e) => {
    e.target.id === "constants"
      ? setFindConst(!findConst)
      : setIsQuadro(!isQuadro);
  };
  console.log(findConst);
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
        {findConst ? null : (
          <>
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
          </>
        )}
        {!isDecrypt ? (
          <TextInput
            placeholder="Encrypt"
            onChange={saveText}
            value={encryptText}
          />
        ) : (
          <>
            {findConst ? (
              <>
                <TextInput
                  name="plain"
                  placeholder="Set plain text"
                  onChange={saveText}
                  value={findText.plain}
                />
                <TextInput
                  name="encrypted"
                  placeholder="Set encrypted text"
                  onChange={saveText}
                  value={findText.decryptResult}
                />
              </>
            ) : (
              <>
                <TextInput
                  placeholder="Decrypt"
                  onChange={saveText}
                  value={decryptText}
                />
              </>
            )}
            <SlideButton
              placeholder="Don't know const?"
              id="constants"
              onChange={handleSlide}
            />
          </>
        )}
      </CipherForm>

      {showResult ? result : null}
    </>
  );
};
