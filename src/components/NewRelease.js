import React, { useState } from "react";
import "../styles/newrelease.css";
import { BsHeart } from "react-icons/bs";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

import ProductQuery from "../components/ProductQuery";

function NewRelease() {
  const [isDrpDwn, setIsDrpDwn] = useState({});
  const { products } = ProductQuery();

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
      <div className="nr-productsWrapper">
        {products.map((x) => {
          const { id, title, price, description, category, image, reating } = x;
          return (
            <div
              key={id}
              className="nr-products"
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={() => handleMouseLeave(id)}>
              <div className="nr-productImageWrapper">
                <img src={image} alt="" />
              </div>

              <div
                className={
                  isDrpDwn[id]
                    ? "nr-product-card-dropdown"
                    : "nr-product-card-dropdown nr-product-card-dropdown-transform"
                }>
                <div className="nr-productDetails">
                  <p className="nr-productDetailsTitle">{title}</p>
                  <p className="nr-productDetailsPrice">$ {price}</p>
                </div>
                <div className="nr-productDetails-icons">
                  <Link to="/item">
                    <FaEye />
                  </Link>
                  <FaBagShopping />
                  <BsHeart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewRelease;
