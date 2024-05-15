import React, { useState } from "react";
import "../styles/itemReview.css";

import { FaRegHeart, FaHeart, FaPlus } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

import { FaMinus } from "react-icons/fa6";
import Discovery from "../components/Discovery";

import { useData } from "../contexts/ItemProvider";
// import ProductQuery from "../components/ProductQuery";

function ItemReview() {
  const [uiState, setUiState] = useState({
    isLike: false,
    isProductDetails: false,
    isShippingReturn: false
  });

  const [selectedOption, setSelectedOption] = useState({
    color: null,
    size: null,
    available: 5,
    amount: 1
  });

  const { selectedItem } = useData();
  // const {
  //   products,
  //   womenClothing,
  //   menClothing,
  //   electronics,
  //   jewelery,
  //   clothing
  // } = ProductQuery();

  const handleAmountIncrease = (option) => {
    setSelectedOption({
      ...selectedOption,
      amount: option + 1
    });
  };
  const handleAmountDecrease = (option) => {
    setSelectedOption({
      ...selectedOption,
      amount: option - 1
    });
  };

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

  const colorPalette = [
    { id: 1, color: "pink" },
    { id: 2, color: "red" },
    { id: 3, color: "skyblue" },
    { id: 4, color: "yellowgreen" }
  ];
  const clothSize = [
    { id: 1, size: "XXL" },
    { id: 2, size: "XL" },
    { id: 3, size: "L" },
    { id: 4, size: "M" }
  ];
  return (
    <>
      <div className="IR-container">
        <div className="ir-section1">
          <div className="irNameAndPriceWrapper it-web">
            <div className="itemNameWrapper">
              <p className="itemName">{selectedItem.title}</p>
              <button
                onClick={() =>
                  setUiState({ ...uiState, isLike: !uiState.isLike })
                }>
                {!uiState.isLike ? <FaRegHeart /> : <FaHeart />}
              </button>
            </div>
            <div className="itemPriceWrapper">
              <p className="itemPrice">$ {selectedItem.price}</p>
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

            <div className="productDetails-info-writeup-wrapper">
              <div
                className={
                  uiState.isProductDetails
                    ? "productDetailInformation"
                    : "productDetailInformation close"
                }>
                <p>{selectedItem.description}</p>
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
        </div>

        <div className="ir-section2">
          <div className="ir-productImageWrapper">
            <div className="ir-productImageWrapper-container">
              <img src={selectedItem.image} alt="" />
            </div>
          </div>

          <div className="irNameAndPriceWrapper it-mobile">
            <div className="itemNameWrapper">
              <p className="itemName">{selectedItem.title}</p>
              <button
                onClick={() =>
                  setUiState({ ...uiState, isLike: !uiState.isLike })
                }>
                {!uiState.isLike ? <FaRegHeart /> : <FaHeart />}
              </button>
            </div>
            <div className="itemPriceWrapper">
              <p className="itemPrice">$ {selectedItem.price}</p>
            </div>
          </div>

          <div className="ir-ProductColorPallet">
            <div className="ir-productColorWrapper">
              <p>Select Color</p>
              <div className="ir-productColorContainer">
                {colorPalette.map((x) => {
                  const { id, color } = x;
                  return (
                    <button
                      key={id}
                      className={`colorButton ${
                        selectedOption.color === id ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleOptionClick(id)}>
                      {selectedOption.color === id && <FaCheck />}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="ir-productSizeWrapper">
              <p>Select Size</p>
              <div className="ir-productSizeWrapperContainer">
                {clothSize.map((x) => {
                  const { id, size } = x;
                  return (
                    <button onClick={() => handleSelectSize(id)} key={id}>
                      {size}{" "}
                      {selectedOption.size === id && (
                        <div className="ir-productSizeChecker">
                          <FaCheck className="colorCheck" />
                        </div>
                      )}
                    </button>
                  );
                })}{" "}
              </div>
            </div>
            <div className="ir-productStockAvailability">
              <p>
                Availability :{" "}
                <span
                  style={{
                    textTransform: "uppercase",
                    color: selectedOption.available === 0 ? "red" : " green"
                  }}>
                  {selectedOption.available} in stock
                  {selectedOption.available > 1 ? "s" : ""}
                </span>
              </p>
            </div>
            <div className="ir-productOrderAmount">
              <div className="ir-orderNumberBtnWrapper">
                <button
                  disabled={selectedOption.amount === 1}
                  style={{
                    backgroundColor:
                      selectedOption.amount === 1 ? "gray" : "#0f0f0f"
                  }}
                  onClick={() => handleAmountDecrease(selectedOption.amount)}>
                  <FaMinus />
                </button>

                <p>{selectedOption.amount}</p>
                <button
                  style={{
                    backgroundColor:
                      selectedOption.amount === selectedOption.available
                        ? "gray"
                        : "#0f0f0f"
                  }}
                  disabled={selectedOption.amount === selectedOption.available}
                  onClick={() => handleAmountIncrease(selectedOption.amount)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="ir-addToCartButton">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <Discovery />
    </>
  );
}

export default ItemReview;
