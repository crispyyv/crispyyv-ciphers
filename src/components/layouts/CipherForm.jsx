import React from "react";
import { SlideButton } from "../ui/SlideButton";
import { SubmitButton } from "../ui/SubmitButton";
import { CipherSelect } from "./CipherSelect";

export const CipherForm = ({
  children,
  isDecrypt,
  slideButton,
  handleSubmit,
  handleSetShift,
  shift,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__choice">
        <SlideButton onChange={slideButton} />
        {isDecrypt ? null : (
          <CipherSelect shift={shift} onChange={handleSetShift} />
        )}
      </div>
      {children}
      <SubmitButton isDecrypt={isDecrypt} />
    </form>
  );
};
