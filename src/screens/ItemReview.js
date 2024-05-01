import React, { useState } from "react";
import "../styles/itemReview.css";

import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { BiPlus, BiMinus } from "react-icons/bi";

import Shoe from "../assets/shoe.jpg";
import ProductQuery from "../components/ProductQuery";

function ItemReview() {
  const product = ProductQuery();

  console.log(product)
  const [uiState, setUiState] = useState({
    isLike: false,
    isProductDetails: false,
    isShippingReturn: false
  });

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
              <p className="itemName">DOLCE GABANA</p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                quam illo vel mollitia facilis nihil nesciunt explicabo tempore
                veritatis, nemo atque labore earum distinctio unde perspiciatis
                repellat quidem libero option ?
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

        {/* _______________________________________________________________________________ */}

        <div className="ir-section2">
          <div className="ir-productImageWrapper">
            <img src={Shoe} alt="" />
          </div>

          <div className="ir-ProductColorPallet">
            <div className="ir-productColorWrapper">color</div>
            <div className="ir-productSizeWrapper">size</div>
            <div className="ir-productStockAvailability">available</div>
            <div className="ir-productOrderAmount">Amount</div>
            <div className="ir-addToCartButton">Add TO CART bTN</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemReview;
