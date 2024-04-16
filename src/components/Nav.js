import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navLinksWrapper" style={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Nav;

const styles = {
  header: {
    backgroundColor: "pink",
    gap: "20px",
    display: "flex",
    width: "100%"
  }
};
