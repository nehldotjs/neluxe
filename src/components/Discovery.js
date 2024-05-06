import React, { useState } from "react";
import "../styles/discovery.css";
import shoe from "../assets/shoe.jpg";

import { FaEye } from "react-icons/fa";
import { FaBagShopping, FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Discovery() {
  const [animation, setAnimation] = useState(true);

  console.log(animation);
  return (
    <div className="discovery-wrapper">
      <p>YOU MIGHT ALSO BE INTERESTED IN</p>
      <div className="discovery-carouselWrapper">
        <div
          className="discovery-cards"
          onMouseEnter={() => setAnimation(!animation)}
          onMouseLeave={() => setAnimation(!animation)}>
          <div className="discovery-card-image-wrapper">
            <img src={shoe} alt="" />
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
      </div>
    </div>
  );
}

export default Discovery;
