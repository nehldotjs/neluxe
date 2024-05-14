import React from "react";
import "../styles/discovery.css";

import SplideCarousel from "../Carousel/SplideCarousel";
import ProductQuery from "./ProductQuery";

function Discovery() {
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
