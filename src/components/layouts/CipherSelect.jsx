import React from "react";
import { numbers } from "../../helpers/constants";
export const CipherSelect = ({ shift, onChange }) => {
  return (
    <div className="form__shift">
      <p>Select key</p>

      <select value={shift} onChange={onChange}>
        {numbers.map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
    </div>
  );
};
