import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ItemReview from "./screens/ItemReview";
import LoginScreen from "./screens/LoginScreen";
 
function ScreenHandler() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item" element={<ItemReview />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default ScreenHandler;
