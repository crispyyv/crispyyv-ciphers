import React, { useRef } from "react";
import { doCrypt } from "../helpers/vingenereHelpers";

export const Vingenere = () => {
  const phraseRef = useRef(null);
  const keywordRef = useRef(null);
  const outputRef = useRef(null);
  const encryptHandler = () => {
    outputRef.current.value = doCrypt(
      phraseRef.current.value,
      keywordRef.current.value,
      false
    );
  };
  const decryptHandler = () => {
    outputRef.current.value = doCrypt(
      phraseRef.current.value,
      keywordRef.current.value,
      true
    );
  };
  return (
    <div className="vingenere">
      <input id="phrase" ref={phraseRef} type="text" placeholder="Phrase" />
      <input id="keyword" ref={keywordRef} type="text" placeholder="Keyword" />
      <input
        id="output"
        ref={outputRef}
        type="text"
        disabled
        placeholder="Result"
      />

      <div className="buttons">
        <button className="form__button" onClick={decryptHandler}>
          Decrypt
        </button>
        <button className="form__button" onClick={encryptHandler}>
          Encrypt
        </button>
      </div>
    </div>
  );
};
