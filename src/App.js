import React, { useEffect } from "react";


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ScreenHandler from "./ScreenHandler";
import Nav from "./components/Nav";
import Footer from "./screens/Footer";
import { ItemProvider } from "./contexts/ItemProvider";

function App() {
 
  return (
    <ItemProvider>
      <Router>
        <Nav />
        <ScreenHandler />
        <Footer />
      </Router>
    </ItemProvider>
  );
}

export default App;
