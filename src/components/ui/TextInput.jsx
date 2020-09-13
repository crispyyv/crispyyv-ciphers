import React from "react";

export const TextInput = ({ placeholder, onChange, value, name }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};
