import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ItemReview from "./screens/ItemReview";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Dashboard from "./Dashboard";
// import Nav from "./components/Nav";
// import Footer from "./screens/Footer";

function ScreenHandler() {
  const [user] = useState(true);
  
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/neluxe/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item" element={<ItemReview />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </>
      ) : (
        <>
          <Route path="/adminDashBoard" element={<Dashboard />} />
        </>
      )}
    </Routes>
  );
}

export default ScreenHandler;
