import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="preview">
      <h1 className="preview__title">Hello, I'm a modern encoder / decoder</h1>

      <p className="preview__subtitle">Now I know the codes of:</p>
      <ul className="preview__links">
        <li>
          <Link to="/ceaser">Ceaser</Link>
        </li>
        <li>
          <Link to="/trithemius">Trithemius</Link>
        </li>
        <li>
          <Link to="/vingenere">Vingenere</Link>
        </li>{" "}
      </ul>
      {/* <span className="preview__special">
        Also I'm learning now, wait please
      </span> */}
    </div>
  );
};
