import React from "react";

export const SubmitButton = ({ isDecrypt }) => {
  return (
    <button className="form__button" type="submit">
      {isDecrypt ? "Decrypt" : "Encrypt"}
    </button>
  );
};
