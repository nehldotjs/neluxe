import React, { useState } from "react";
import "../styles/newrelease.css";
import { BsHeart } from "react-icons/bs";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
function NewRelease() {
  const [isDrpDwn, setIsDrpDwn] = useState(false);
  return (
    <div className="nr-wrapper">
      <div className="nr-header-container">
        <h3>NEW RELEASE</h3>
        <button>
          <h5>EXPLORE All</h5>
        </button>
      </div>
      {/* <marquee behavior="pause" direction="right">
        <h1>hello</h1>
        <h1>world</h1>
      </marquee> */}
      <div className="nr-productsWrapper">
        <div
          className="nr-products"
          onMouseEnter={() => setIsDrpDwn(true)}
          onMouseLeave={() => setIsDrpDwn(!isDrpDwn)}>
          <div
            onMouseEnter={() => setIsDrpDwn(true)}
            className={
              isDrpDwn
                ? "nr-product-card-dropdown"
                : "nr-product-card-dropdown nr-product-card-dropdown-transform "
            }>
            <Link to="/item">
              <FaEye />
            </Link>
            <FaBagShopping />
            <BsHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewRelease;
