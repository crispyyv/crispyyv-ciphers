import React from "react";

export const SlideButton = ({ onChange, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{placeholder}</label>
      <input
        className="btn-slide"
        id={id}
        type="checkbox"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
