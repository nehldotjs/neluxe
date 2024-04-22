import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ScreenHandler from "./ScreenHandler";
import Nav from "./components/Nav";
import Footer from "./screens/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <ScreenHandler />

      <Footer/>
    </Router>
  );
}

export default App;
