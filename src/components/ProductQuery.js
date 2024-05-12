import { useState, useEffect } from "react";
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

  const jewelery = products.filter((x) => x.category === "jewelery");
  const electronics = products.filter((x) => x.category === "electronics");
  const womenClothing = products.filter(
    (x) => x.category === "women's clothing"
  );
  const menClothing = products.filter((x) => x.category === "men's clothing");
const clothing = products.filter(
  (x) => x.category === "women's clothing" || x.category === "men's clothing"
);
  return {
    products,
    womenClothing,
    menClothing,
    electronics,
    jewelery,
    clothing
  };
}

export default ProductQuery;
