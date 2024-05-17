import React, { useEffect, useState } from "react";
import "../styles/newrelease.css";
import { BsHeart } from "react-icons/bs";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

import ProductQuery from "../components/ProductQuery";
import { useData } from "../contexts/ItemProvider";

import AOS from "aos";
import "aos/dist/aos.css";

import SplideCarousel from "../Carousel/SplideCarousel";

import pexelAd from "../assets/pexelAd.jpg";
import barcode from "../assets/Realistic-bar-code-icon-1.png";

function NewRelease() {
  const [isDrpDwn, setIsDrpDwn] = useState({});
  const { setSelectedItem } = useData();
  const { womenClothing, menClothing, clothing } = ProductQuery();

  const handleMouseEnter = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: false }));
  };

  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  });

  return (
    <div className="nr-wrapper">
      <div className="nr-header-container">
        <h3 data-aos="fade-right"> New Release </h3>
        <button>
          <h5 data-aos="fade-left">EXPLORE All</h5>
        </button>
      </div>

      <div className="nr-productsWrapper">
        <SplideCarousel items={clothing} />
      </div>

      {/*________________________________________________AD */}

      <div className="nr-section2">
        <div className="nr-section-image-wrapper">
          <img
            data-aos="zoom-in-up"
            src={pexelAd}
            alt="Photo by Godisable Jacob: https://www.pexels.com/photo/shallow-focus-photography-woman-in-black-and-pink-parka-jacket-905247/"
          />
        </div>
        <div className="nr-section2-writeUpContainer">
          <div className="nr-section2-writeUp-barcode">
            <h1 data-aos="fade-left">
              Whats Your <br /> Style <br /> ???!!!
            </h1>
            <div className="nr-barcode" data-aos="fade-left">
              <img src={barcode} alt="" data-aos="zoom-in-up" />
            </div>
          </div>
          <p data-aos="zoom-in-up">
            In the fast-paced world of fashion, finding the perfect blend of
            style, quality, and convenience can often feel like an endless
            quest. Enter Neluxe your ultimate online shopping destination,
            designed to elevate your wardrobe with premium fashion brands while
            making the shopping experience effortless and enjoyable
          </p>
        </div>
      </div>

      {/* _________________________________________WOMEN */}

      <div className="nr-section3-container">
        <h3 data-aos="fade-right">women Collection</h3>
        <div className="nr-section3-container-women">
          {womenClothing.map((item) => {
            const { id, title, price, image } = item;
            return (
              <div
                data-aos="zoom-in-up"
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

      {/* _________________________________________MEN */}

      <div className="nr-section3-container">
        <h3 data-aos="fade-right">Men Collection</h3>
        <div className="nr-section3-container-men">
          {menClothing.map((item) => {
            const { id, title, price, image } = item;
            return (
              <div
                data-aos="zoom-in-up"
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
