import React, { useState } from "react";
import "../styles/discovery.css";

import { FaEye } from "react-icons/fa";
import { FaBagShopping, FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

import SplideCarousel from "../Carousel/SplideCarousel";
import { SplideSlide } from "@splidejs/react-splide";

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
    jewelry,
    clothing
  } = ProductQuery();
  const combinedItems = [...jewelry, ...electronics];

  return (
    <div className="discovery-wrapper">
      <p>YOU MIGHT ALSO BE INTERESTED IN</p>
      <div className="discovery-carouselWrapper">
        <SplideCarousel items={combinedItems} />
      </div>
    </div>
  );
}

export default Discovery;
