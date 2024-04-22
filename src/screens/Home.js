import React, { useState, useEffect } from "react";
import ScreenDetector from "../components/ScreenDetector";

import "../styles/home.css";

import heroImg from "../assets/pexels-artem-podrez-5726806.jpg";
import NewRelease from "../components/NewRelease";

function Home() {
  const { screenWidth } = ScreenDetector();
  return (
    <div className="homeWrapper">
      <div className="heroSection-Wrapper">
        <div className="shopNowBtn">
          <button>
            <p>Shop Now</p>
          </button>
        </div>
        <img src={heroImg} alt="pexels-artem-podrez-5726806.jpg" />
      </div>
      <NewRelease/>
    </div>
  );
}

export default Home;

const styles = {
  header: {
    gap: "20px",
    display: "flex",
    width: "100%"
  }
};
