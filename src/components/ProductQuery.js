import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductQuery() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list",
        headers: {
          "X-RapidAPI-Key":
            "0fe300dfe1msh8c2774bc91978c4p1bb272jsnb45f9a5bd2d2",
          "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com"
        }
      };

      try {
        const response = await axios.request(options);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { product };
}

export default ProductQuery;
