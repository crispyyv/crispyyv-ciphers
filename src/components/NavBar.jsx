import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = ({ location }) => {
  if (location.pathname === "/") return null;
  return (
    <>
      <div className="background">
        <ul className="nav">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/ceaser">Ceaser</Link>
          </li>
          <li className="nav__item">
            <Link to="/trithemius">Trithemius</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default withRouter(NavBar);
