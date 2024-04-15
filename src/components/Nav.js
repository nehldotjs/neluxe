import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navLinksWrapper" style={styles.header}>
      <Link to="/">Home</Link> {/* Use "/" instead of "/home" */}
      <Link to="/about">About</Link> {/* Use "/about" instead of "/About" */}
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
