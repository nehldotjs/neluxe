import React from "react";
import "../styles/about.css";

import shoppingImg from "../assets/shoppingIMAGE.jpg";
import logo from "../assets/NELUXE.png";
import bros from "../assets/pexels-wdnet-230544.jpg";

import SplideCarousel from "../Carousel/SplideCarousel";
import ProductQuery from "../components/ProductQuery";

function About() {
  const { clothing } = ProductQuery();

  return (
    <div className="about-wrapper">
      <div className="about-imageWrapprContainer">
        <div className="about-imageWrapper">
          <div className="about-backgroundOverlay"></div>
          <img src={shoppingImg} alt="" className="shopping-image" />
        </div>
        <div className="about-imageWrapper-logo">
          <img src={logo} alt="" className="about-neluxe-logo-image" />
        </div>
      </div>

      <div className="about-context">
        <div className="about-writeup">
          <div className="about-writeup-container">
            <h3>
              Your Destination for Quality Fashion and Seamless Online Shopping
            </h3>
            <p>
              At Neluxe, we understand the importance of quality in every stitch
              and fabric. That's why we curate a meticulously selected
              collection of fashion clothing brands renowned for their
              craftsmanship and dedication to excellence. From timeless classics
              to cutting-edge trends, our platform showcases a diverse range of
              styles to suit every taste and occasion.
            </p>
          </div>
        </div>
        <div className="about-context-imageWrapper">
          <img src={bros} alt="" />
        </div>
        <div className="about-writeup-second ">
          <div className="about-writeup-second-container ">
            <h3>Your perfect fashion find awaits!</h3>
            <p>
              What sets Neluxe apart is our commitment to customer satisfaction.
              We prioritize transparency, ensuring that every product detail,
              from sizing to material composition, is readily available,
              empowering you to make informed purchasing decisions.
              Additionally, our secure payment gateways and swift delivery
              services guarantee peace of mind, so you can shop with confidence,
              knowing that your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      <div className="about-cards-wrapper">
        <h3>New Release</h3>
        <SplideCarousel items={clothing} />
      </div>
    </div>
  );
}

export default About;
