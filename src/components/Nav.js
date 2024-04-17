import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/NELUXE.png";
import "../styles/nav.css";

function Nav() {
  return (
    <div className="navLinksWrapper">
      <p>Welcome to our store</p>
      <hr className="hr" />
      <div className="logoWrapper">
        <Link className="logoLink">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="linksWrapper">
        <Link className="navigationBtn" to="/">
          Home
        </Link>
        <Link className="navigationBtn" to="/about">
          About
        </Link>
        <Link className="navigationBtn" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;

// const styles = {
//   header: {
//     backgroundColor: "pink",
//     gap: "20px",
//     display: "flex",
//     width: "100%",
//     flexDirection: "column"
//   }
// };
