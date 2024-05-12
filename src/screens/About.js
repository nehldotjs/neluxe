import React from "react";
import SplideCarousel from "../Carousel/SplideCarousel";
import { SplideSlide } from "@splidejs/react-splide";

function About() {
  const cards = (
    <>
      <SplideSlide>
        <h1>slider 1</h1>
      </SplideSlide>
      <SplideSlide>
        <h1>slider 2</h1>
      </SplideSlide>
    </>
  );

  return (
    <div>
      <SplideCarousel>{cards}</SplideCarousel>
    </div>
  );
}

export default About;
