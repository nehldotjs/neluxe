import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function SplideCarousel({ children }) {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        perPage: 5,
        perMove: "1",
        width: "auto",
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
            perPage: 1 // Show 1 slide per page
          }
        }
      }}>
      {children}
    </Splide>
  );
}

export default SplideCarousel;
