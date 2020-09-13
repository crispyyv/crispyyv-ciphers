import React from "react";
import { SubmitButton } from "../ui/SubmitButton";
import { CipherSelect } from "./CipherSelect";

export const CipherForm = ({
  children,
  isDecrypt,
  handleSubmit,
  handleSetShift,
  shift,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__choice">
        {isDecrypt ? null : (
          <CipherSelect shift={shift} onChange={handleSetShift} />
        )}
      </div>
      {children}
      <SubmitButton isDecrypt={isDecrypt} />
    </form>
  );
};
