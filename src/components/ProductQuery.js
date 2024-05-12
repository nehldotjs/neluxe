import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductQuery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchProductData();
  }, []);

  return{ products}
}

export default ProductQuery;
