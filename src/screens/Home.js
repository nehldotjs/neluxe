import React, { useState, useEffect } from "react";
import ScreenDetector from "../components/ScreenDetector";

import "../styles/home.css"


function Home() {
  const { screenWidth } = ScreenDetector();
  return (
    <div className="homeWrapper">
   
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
