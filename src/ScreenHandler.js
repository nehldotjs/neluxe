import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
 
function ScreenHandler() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default ScreenHandler;
