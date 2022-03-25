import React, { useEffect, useState } from "react";
import Products from "../modules/Products";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await Products.index();
    !response.message && setProducts(response.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsList = products.map((product, index) => {
    return <li>{product.name}</li>;
  });

  return (
    <div>
      ProductsDisplay
      <ul>{productsList}</ul>
    </div>
  );
};

export default ProductsDisplay;
