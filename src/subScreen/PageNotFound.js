import React from "react";
import "./pageNotFound.css";

import techie from "../assets/pexels-divinetechygirl-1181278.jpg";

function PageNotFound() {
  return (
    <div className="page-wrapper">
      <div className="page-overlay-wrapper">
        <div className="page-overlay-context"></div>
        <div className="page-context">
          <h2>! 404 !</h2>
          <h1>Oops! We're Sorry.</h1>
          <p>
             The page you're trying to access is currently under maintenance to
            enhance your browsing experience. We promise to have
            everything up and running smoothly shortly.
          </p>
        </div>
      </div>
      <div className="page-backgroundImageWrapper">
        <img src={techie} alt="" />
      </div>
    </div>
  );
}

export default PageNotFound;
