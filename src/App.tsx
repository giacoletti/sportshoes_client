import React from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import ProductsDisplay from "./components/ProductsDisplay";
import BannersDisplay from "./components/BannersDisplay";

const App = () => {
  return (
    <>
      <Header />
      <Slideshow />
      <ProductsDisplay />
      <BannersDisplay />
    </>
  );
};

export default App;
