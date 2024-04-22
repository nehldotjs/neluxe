import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/NELUXE.png";
import "../styles/nav.css";

import { FaSearch, FaShoppingCart, FaShoppingBag } from "react-icons/fa";

function Nav() {
  const [isSearchValue, setIsSearchValue] = useState(false);

  return (
    <div className="navLinksWrapper">
      <div className="navSecondaryWrapper">
        <p>Welcome to our store</p>
        <hr className="hr" />
        <div className="logoWrapper">
          <Link className="logoLink">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* ________________________________________________________________________________ */}

        <div className="navigationSection">
          <div className="searchBar">
            <div className="searchIconWrapper">
              <button
                className="searchBtnIcon"
                onClick={() => setIsSearchValue(!isSearchValue)}>
                <FaSearch className="searchIcon" />
              </button>
            </div>
          </div>

          {/* ______________________________________________________________________________ */}

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

          {/* ______________________________________________________________________________ */}

          <div className="cartWrapper">
            <select name="choice" className="currencyContainer  ">
              <option value="first">USD</option>
              <option value="second" selected>
                NGN
              </option>
            </select>
            <button className="AuthContainer">LOGIN</button>

            <button className="wishList">
              <FaShoppingBag />
            </button>
            <button className="cart">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className="searchInputContainer">
        <div
          onMouseLeave={() => setIsSearchValue(!isSearchValue)}
          className={
            !isSearchValue ? "inputWrapper inputTransform" : "inputWrapper"
          }>
          <div className="inputSecondaryWrapper">
            <input type="text" className="searchInput" placeholder="Search" />
            <button className="searchInputBtn">
              <FaSearch className="searchInputIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
