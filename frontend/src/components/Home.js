import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomePageSectionFive from "./HomePage/HomePageSectionFive";
import HomePageSectionFour from "./HomePage/HomePageSectionFour";
import HomePageSectionOne from "./HomePage/HomePageSectionOne";
import HomePageSectionSix from "./HomePage/HomePageSectionSix";
import HomePageSectionThree from "./HomePage/HomePageSectionThree";
import HomePageSectionTwo from "./HomePage/HomePageSectionTwo";

import Slider from "./HomePage/Slider";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <HomePageSectionTwo />
      <HomePageSectionThree />
      <HomePageSectionFour />
      <HomePageSectionFive />
      <HomePageSectionSix />
      <Footer />
    </div>
  );
}

export default Home;
