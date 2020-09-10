import React from "react";

export const SlideButton = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="isDecrypt">Decrypt?</label>
      <input
        id="isDecrypt"
        type="checkbox"
        placeholder="Decrypt?"
        onChange={onChange}
      />
    </div>
  );
};
