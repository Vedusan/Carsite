import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Bibliotek/Chelsealogo.png";
import "../Style/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} alt="" className="Chelsea" />
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/tjanster">Våra tjänster</Link>
        <Link to="/omoss">Om oss</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </div>
  );
}

export default Navbar;
