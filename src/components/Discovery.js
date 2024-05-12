import React, { useState } from "react";
import "../styles/discovery.css";

import { FaEye } from "react-icons/fa";
import { FaBagShopping, FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductQuery from "./ProductQuery";
import { useData } from "../contexts/ItemProvider";

function Discovery() {
  const [animation, setAnimation] = useState(true);

  const { selectedItem } = useData();
  const {
    products,
    womenClothing,
    menClothing,
    electronics,
    jewelery,
    clothing
  } = ProductQuery();

  return (
    <div className="discovery-wrapper">
      <p>YOU MIGHT ALSO BE INTERESTED IN</p>
      <div className="discovery-carouselWrapper">
        {jewelery.map((item) => {
          return (
            <div
              className="discovery-cards"
              onMouseEnter={() => setAnimation(!animation)}
              onMouseLeave={() => setAnimation(!animation)}>
              <div className="discovery-card-image-wrapper">
                <img src={item.image} alt="" />
              </div>
              <div
                className={
                  !animation
                    ? "discoveryCardsOption"
                    : "discoveryCardsOption discoveryCardsOptionTransform"
                }>
                <Link to="/item">
                  <FaEye />
                </Link>
                <FaBagShopping />
                <FaCartPlus />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Discovery;
