import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { FaBagShopping, FaEye } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";
import { useData } from "../contexts/ItemProvider";

import AOS from "aos";
import "aos/dist/aos.css";

function SplideCarousel({ items }) {
  const [isDrpDwn, setIsDrpDwn] = useState({});
  const { setSelectedItem } = useData();

  const handleMouseEnter = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setIsDrpDwn((prevState) => ({ ...prevState, [id]: false }));
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  });
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        perPage: 5,
        perMove: "1",
        width: "100%",
        height: "auto",
        type: "focus",
        gap: "10px",
        rewindSpeed: "3000",
        arrows: true,
        pagination: false,
        extensions: { AutoScroll },
        autoScroll: {
          speed: 3,
          pauseOnHover: true,
          pauseOnFocus: false
        },
        breakpoints: {
          768: {
            // Breakpoint for tablets and small desktops
            perPage: 3 // Show 3 slides per page
          },
          576: {
            // Breakpoint for mobile devices
            perPage: 3 // Show 1 slide per page
          }
        }
      }}>
      {items.map((item) => {
        const { id, title, price, image } = item;
        return (
          <SplideSlide
            data-aos="zoom-in-up"
            key={id}
            className="nr-products"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}>
              
            <div className="nr-productImageWrapper">
              <img src={image} alt="" data-aos="fade-zoom-in" />
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
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default SplideCarousel;
