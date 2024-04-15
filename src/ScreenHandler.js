import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";

function ScreenHandler() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about"   element={<About />} />
      </Routes>
    </>
  );
}

export default ScreenHandler;
