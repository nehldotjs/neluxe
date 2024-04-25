import React, { useState } from "react";
import "../styles/itemReview.css";

import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { BiPlus, BiMinus } from "react-icons/bi";

function ItemReview() {
  const [state, setState] = useState({
    isLike: false,
    isProductDetails: false,
    isShippingReturn: false
  });

  console.log(state.isLike);
  return (
    <div className="IR-container">
      <div className="ir-section1">
        <div className="irNameAndPriceWrapper">
          <div className="itemNameWrapper">
            <p className="itemName">DOLCE GABANA</p>
            <button
              onClick={() => setState({ ...state, isLike: !state.isLike })}>
              {!state.isLike ? <FaRegHeart /> : <FaHeart />}
            </button>
          </div>
          <div className="itemPriceWrapper">
            <p className="itemPrice">2 billion dollars</p>
          </div>
        </div>

        <div className="productInfo">
          <div className="productDetails">
            <button
              onClick={() =>
                setState({
                  ...state,
                  isProductDetails: !state.isProductDetails
                })
              }>
              <div className="productDetailsHeader">
                <h4>Product Details</h4>
                <div>{!state.isProductDetails ? <BiPlus /> : <BiMinus />}</div>
              </div>
            </button>
            <div className="productDetailInformationWrapper ">
              <p
                className={
                  state.isProductDetails
                    ? "productDetailInformation "
                    : "productDetailInformation close"
                }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                quam illo vel mollitia facilis nihil nesciunt explicabo tempore
                veritatis, nemo atque labore earum distinctio unde perspiciatis
                repellat quidem libero optio?
              </p>
            </div>
          </div>
          <div className="productShippingAndReturnsPolicy">
            <button
              onClick={() =>
                setState({
                  ...state,
                  isShippingReturn: !state.isShippingReturn
                })
              }>
              <div className="shippingAndReturnContainer">
                <h4>Shipping & Returns</h4>
                <div>{!state.isShippingReturn ? <BiPlus /> : <BiMinus />}</div>
              </div>
            </button>

            <ul>
              <li> STANDARD SHIPPING 6 WORKING DAYS</li>
              <li>EXPRESS SHIPPING 3-4 WORKING DAYS</li>
              <li>FREE RETURNS IN 30 DAYS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ir-section2">
        <h1>IMAGE</h1> <h1>PROPERTIES</h1>
      </div>
    </div>
  );
}

export default ItemReview;
