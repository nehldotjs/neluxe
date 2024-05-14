import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/NELUXE.png";
import "../styles/nav.css";

import { FaSearch, FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

function Nav() {
  const [isSearchValue, setIsSearchValue] = useState(false);

  const [animation, setAnimation] = useState({
    dropMenu: false,
    searchMenu: false
  });

  const handleToggleAnimation = (animationType) => {
    setAnimation((prev) => ({
      ...prev,
      [animationType]: !prev[animationType]
    }));
    if (animationType === "dropMenu" && animation.searchMenu) {
      setAnimation((prev) => ({
        ...prev,
        searchMenu: false
      }));
    } else if (animationType === "searchMenu" && animation.dropMenu) {
      setAnimation((prev) => ({
        ...prev,
        dropMenu: false
      }));
    }
  };

  return (
    <div className="navLinksWrapper">
      <div className="navSecondaryWrapper">
        <p>Welcome to our store</p>
        <hr className="hr" />
        <div className="logoWrapper">
          <Link to="/neluxe/" className="logoLink">
            <img src={logo} alt="" />
          </Link>
        </div>

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
            <Link className="navigationBtn" to="/neluxe/">
              SHOP
            </Link>
            <Link className="navigationBtn" to="/about">
              ABOUT US
            </Link>
            <Link className="navigationBtn" to="/contact">
              OUR STORE
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

            <Link className="AuthContainer" to="/login">
              LOGIN
            </Link>

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

      {/* ___________________________________________________________ MOBILE NAV*/}

      <div className="nav-mobileMenu-wrapper">
        <div className="mn-buttonWrapper">
          <button
            className="mn-SearchButton"
            onClick={() => handleToggleAnimation("searchMenu")}>
            <RiSearchLine size={30} color={"#383838"} />
          </button>

          <button
            className="mn-button"
            onClick={() => handleToggleAnimation("dropMenu")}>
            {animation.dropMenu ? (
              <HiMenuAlt3 size={40} color={"#383838"} />
            ) : (
              <HiMenu size={40} color={"#383838"} />
            )}
          </button>
        </div>
        <div className="mn-dropDownMenu">
          <div
            className={
              animation.dropMenu
                ? "mn-dropDownMenuContainer"
                : "mn-dropDownMenuContainer mn-transform"
            }>
            <Link className="navigationBtn MobileLoginBtn" to="/login">
              LOGIN
            </Link>
            <Link className="navigationBtn mobilNavLink" to="/neluxe/">
              SHOP
            </Link>
            <Link className="navigationBtn mobilNavLink" to="/about">
              ABOUT US
            </Link>
            <Link className="navigationBtn mobilNavLink" to="/contact">
              OUR STORE
            </Link>
          </div>
          <div
            className={
              animation.searchMenu
                ? "mn-dropDownMenuContainer-search"
                : "mn-dropDownMenuContainer mn-transform-search"
            }>
            <div className="mobileSearchInput">
              <input type="text" />
              <RiSearchLine size={25} color={"#383838"} />
            </div>
          </div>
        </div>
      </div>

      {/* ____________________________________________________________MOBILE NAV*/}
    </div>
  );
}

export default Nav;
