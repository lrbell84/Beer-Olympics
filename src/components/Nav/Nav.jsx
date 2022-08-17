import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h3>7 Days Without Beer = 1 Weak - Be Happy - Sip Happens</h3>
      </Link>
    </div>
  );
};

export default Nav;
