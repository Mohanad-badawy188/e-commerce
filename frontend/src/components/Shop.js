import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ShopNavMenu from "./Shop/ ShopNavMenu";

import StoreMain from "./Shop/StoreMain";
function Shop() {
  return (
    <div>
      <Header />
      <ShopNavMenu />
      <StoreMain />
      <Footer />
    </div>
  );
}

export default Shop;
