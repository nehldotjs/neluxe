import React, { useState } from "react";
import "../styles/newrelease.css";
import { BsHeart } from "react-icons/bs";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

import ProductQuery from "../components/ProductQuery";

function NewRelease() {
  const [isDrpDwn, setIsDrpDwn] = useState({});
  const { product } = ProductQuery();

  console.log(product);

  const handleMouseEnter = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="nr-wrapper">
      <div className="nr-header-container">
        <h3>NEW RELEASE</h3>
        <button>
          <h5>EXPLORE All</h5>
        </button>
      </div>
      <div className="nr-productsWrapper"></div>
    </div>
  );
}

export default NewRelease;
