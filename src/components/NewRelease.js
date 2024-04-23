import React, { useState } from "react";
import "../styles/newrelease.css";
import { BsDisplay } from "react-icons/bs";

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
            {" "}
            shop options
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewRelease;
