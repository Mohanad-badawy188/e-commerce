import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetails from "./Product/ProductDetails.js";
import RelatedProducts from "./Product/RelatedProducts";

function Product() {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default Product;
