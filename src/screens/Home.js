import React, { useState, useEffect } from "react";
import ScreenDetector from "../components/ScreenDetector";

function Home() {
  const { screenWidth } = ScreenDetector();
  return <div>{screenWidth}</div>;
}

export default Home;

const styles = {
  header: {
    gap: "20px",
    display: "flex",
    width: "100%"
  }
};
