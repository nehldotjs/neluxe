import React, { useEffect } from "react";

import "../styles/home.css";

import heroImg from "../assets/pexels-artem-podrez-5726806.jpg";
import NewRelease from "../components/NewRelease";

function Home() {
  

  return (
    <div className="homeWrapper">
      <div className="heroSection-Wrapper" >
        <div className="shopNowBtn" >
          <button>
            <p >Shop Now</p>
          </button>
        </div>
        <img src={heroImg} alt="pexels-artem-podrez-5726806.jpg"  />
      </div>
      <NewRelease />
    </div>
  );
}

export default Home;
