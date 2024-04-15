import React from "react";

function Home() {
  return (
    <div style={styles.header}>
      <h1>HOME SCREEN</h1>
    </div>
  );
}

export default Home;

const styles = {
  header: {
    gap: "20px",
    display: "flex",
    width: "100%"
  }
};
