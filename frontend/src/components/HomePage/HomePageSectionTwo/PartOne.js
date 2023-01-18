import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";
import "../../../index.css";

import PartOneProps from "./PartOneProps";
import { useSelector } from "react-redux";

const Container = styled.div`
  min-height: 75vh;
`;
const FeaturedProduct = styled.div`
  margin-top: 80px;
`;
const FeaturedTitle = styled.div`
  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;

  color: #1a0b5b;
  text-align: center;
`;
const FeaturedBody = styled.div`
  margin: 60px auto;
  width: 1300px;
  height: 500px;
  display: flex;
  position: relative;
`;

function PartOne() {
  const products = useSelector((state) => state.products.products);

console.log(products)
  const FeaturedProducts = products?.filter((item) =>
    item.categories.includes("Featured Products")
  );

  return (
    <Container>
      <FeaturedProduct>
        <FeaturedTitle>Featured Products</FeaturedTitle>

        <FeaturedBody>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            {FeaturedProducts &&
              FeaturedProducts.map((item) => (
                <SwiperSlide key={item._id}>
                  <PartOneProps
                    name={item.name}
                    imgURL={item.imgURL}
                    color={item.color}
                    code={item.code}
                    price={item.price}
                    _id={item._id}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </FeaturedBody>
      </FeaturedProduct>
    </Container>
  );
}

export default PartOne;
