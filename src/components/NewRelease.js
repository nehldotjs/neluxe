import React, { useState } from "react";
import "../styles/newrelease.css";
import { BsHeart } from "react-icons/bs";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

import ProductQuery from "../components/ProductQuery";
import { useData } from "../contexts/ItemProvider";

import SplideCarousel from "../Carousel/SplideCarousel";
import { SplideSlide } from "@splidejs/react-splide";

import pexelAd from "../assets/pexelAd.jpg";
import barcode from "../assets/Realistic-bar-code-icon-1.png";

function NewRelease() {
  const [isDrpDwn, setIsDrpDwn] = useState({});
  const { selectedItem, setSelectedItem, text } = useData();
  const {
    products,
    womenClothing,
    menClothing,
    electronics,
    jewelery,
    clothing
  } = ProductQuery();

  const handleMouseEnter = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="nr-wrapper">
      <div className="nr-header-container">
        <h3> New Release </h3>
        <button>
          <h5>EXPLORE All</h5>
        </button>
      </div>

      <div className="nr-productsWrapper">
        <SplideCarousel>
          {clothing.map((item) => {
            const { id, title, price, image } = item;
            return (
              <SplideSlide>
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
                      <Link to="/item" onClick={() => setSelectedItem(item)}>
                        <FaEye />
                      </Link>
                      <FaBagShopping />
                      <BsHeart />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </SplideCarousel>
      </div>

      <div className="nr-section2">
        <div className="nr-section-image-wrapper">
          <img
            src={pexelAd}
            alt="Photo by Godisable Jacob: https://www.pexels.com/photo/shallow-focus-photography-woman-in-black-and-pink-parka-jacket-905247/"
          />
        </div>
        <div className="nr-section2-writeUpContainer">
          <div className="nr-section2-writeUp-barcode">
            <h1>
              Whats Your <br /> Style <br /> ???!!!
            </h1>
            <div className="nr-barcode">
              <img src={barcode} alt="" />
            </div>
          </div>
          <p>
            In the fast-paced world of fashion, finding the perfect blend of
            style, quality, and convenience can often feel like an endless
            quest. Enter Neluxe your ultimate online shopping destination,
            designed to elevate your wardrobe with premium fashion brands while
            making the shopping experience effortless and enjoyable
          </p>
        </div>
      </div>

      <div className="nr-section3-container">
        <h3>women Collection</h3>
        <div className="nr-section3-container-women">
          {womenClothing.map((item) => {
            const { id, title, price, image } = item;
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
                    <Link to="/item" onClick={() => setSelectedItem(item)}>
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

      <div className="nr-section3-container">
        <h3>Men Collection</h3>
        <div className="nr-section3-container-men">
          {menClothing.map((item) => {
            const { id, title, price, image } = item;
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
                    <Link to="/item" onClick={() => setSelectedItem(item)}>
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
    </div>
  );
}

export default NewRelease;
