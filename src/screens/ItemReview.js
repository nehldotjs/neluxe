import React, { useState } from "react";
import "../styles/itemReview.css";

import { FaRegHeart, FaHeart, FaPlus } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

import Shoe from "../assets/shoe.jpg";
import { FaMinus } from "react-icons/fa6";

function ItemReview() {
  const [uiState, setUiState] = useState({
    isLike: false,
    isProductDetails: false,
    isShippingReturn: false
  });

  const [selectedOption, setSelectedOption] = useState({
    color: null,
    size: null,
    available: 0
  });

  const handleOptionClick = (option) => {
    setSelectedOption({
      ...selectedOption,
      color: option
    });
  };

  const handleSelectSize = (option) => {
    setSelectedOption({
      ...selectedOption,
      size: option
    });
  };

  const toggleProductDetails = () => {
    setUiState({
      ...uiState,
      isProductDetails: !uiState.isProductDetails
    });
  };

  const toggleShippingReturn = () => {
    setUiState({
      ...uiState,
      isShippingReturn: !uiState.isShippingReturn
    });
  };

  return (
    <>
      <div className="IR-container">
        <div className="ir-section1">
          <div className="irNameAndPriceWrapper">
            <div className="itemNameWrapper">
              <p className="itemName">Norman Mason</p>
              <button
                onClick={() =>
                  setUiState({ ...uiState, isLike: !uiState.isLike })
                }>
                {!uiState.isLike ? <FaRegHeart /> : <FaHeart />}
              </button>
            </div>
            <div className="itemPriceWrapper">
              <p className="itemPrice">2 billion dollars</p>
            </div>
          </div>

          <div className="productInfo">
            <div className="productDetails">
              <button onClick={toggleProductDetails}>
                <div className="productDetailsHeader">
                  <h4>Product Details</h4>
                  <div>
                    {!uiState.isProductDetails ? <BiPlus /> : <BiMinus />}
                  </div>
                </div>
              </button>
            </div>
            <div
              className={
                uiState.isProductDetails
                  ? "productDetailInformation"
                  : "productDetailInformation close"
              }>
              <p>
                trip wrote box death person rear determine doing lamp per lion
                muscle physical consonant selection read social camp light bill
                pair sure enter good
              </p>
            </div>
            <div
              className={
                uiState.isProductDetails
                  ? "productShippingAndReturnsPolicy"
                  : "productShippingAndReturnsPolicy productShippingAndReturnsPolicyTransform"
              }>
              <button onClick={toggleShippingReturn}>
                <div className="shippingAndReturnContainer">
                  <h4>Shipping & Returns</h4>
                  <div>
                    {!uiState.isShippingReturn ? <BiPlus /> : <BiMinus />}
                  </div>
                </div>
              </button>

              <ul>
                <li> STANDARD SHIPPING 6 WORKING DAYS</li>
                <li>EXPRESS SHIPPING 3-4 WORKING DAYS</li>
                <li>FREE RETURNS IN 30 DAYS</li>
                <div
                  className={
                    !uiState.isShippingReturn
                      ? "ulOverlay"
                      : " ulOverlay ulOverlayTransform"
                  }></div>
              </ul>
            </div>
          </div>
        </div>

        <div className="ir-section2">
          <div className="ir-productImageWrapper">
            <img src={Shoe} alt="" />
          </div>

          <div className="ir-ProductColorPallet">
            <div className="ir-productColorWrapper">
              <p>Select Color</p>
              <div className="ir-productColorContainer">
                <button
                  className={`colorButton ${
                    selectedOption.color === "option3" ? "selected" : ""
                  }`}
                  style={{ backgroundColor: "orange" }}
                  onClick={() => handleOptionClick("option3")}>
                  {selectedOption.color === "option3" && <FaCheck />}
                </button>
              </div>
            </div>
            <div className="ir-productSizeWrapper">
              <p>Select Size</p>
              <button onClick={() => handleSelectSize("XL")}>
                XL
                {selectedOption.size === "XL" && (
                  <div className="ir-productSizeChecker">
                    <FaCheck className="colorCheck" />
                  </div>
                )}
              </button>
              {/* Add similar buttons for other size options */}
            </div>
            <div className="ir-productStockAvailability">
              <p>
                Availability :{" "}
                <span
                  style={{
                    color: selectedOption.available === 0 ? "red" : " green"
                  }}>
                  {selectedOption.available} in stock
                </span>{" "}
              </p>
            </div>
            <div className="ir-productOrderAmount">
              <div className="ir-orderNumberBtnWrapper">
                <button>
                  <FaMinus />
                </button>{" "}
                <p>0</p>{" "}
                <button>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="ir-addToCartButton">Add TO CART bTN</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemReview;
