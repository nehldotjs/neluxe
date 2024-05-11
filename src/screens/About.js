import React from "react";
import Error from "../components/Error";
import ProductQuery from "../components/ProductQuery";
function About() {
  const { productData } = ProductQuery();
  console.log(productData);

  return (
    <div>
      <Error />
    </div>
  );
}

export default About;
