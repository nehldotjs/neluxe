import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductQuery() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchProductData();
  }, []);

  return {product};
}

export default ProductQuery;
