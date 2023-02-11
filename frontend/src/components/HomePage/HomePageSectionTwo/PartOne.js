import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";
import "../../../index.css";

import PartOneProps from "./PartOneProps";
import axios from "axios";

const Container = styled.div`
  min-height: 75vh;
  @media (max-width: 1000px) {
    height: 2000px;
  }
  
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
  @media (max-width: 1300px) {
    width: 1000px;
    margin: auto;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    width: auto;
    display: block;
    margin: auto;
  }
`;

function PartOne() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/product?limit=4&&category=Featured Products`,
        });
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);

  return (
    <Container>
      <FeaturedProduct>
        <FeaturedTitle>Featured Products</FeaturedTitle>

        <FeaturedBody>
          {products.map((item) => (
            <PartOneProps
            key={item._id}
              name={item.name}
              imgURL={item.imgURL}
              color={item.color}
              code={item.code}
              price={item.price}
              _id={item._id}
            />
          ))}
        </FeaturedBody>
      </FeaturedProduct>
    </Container>
  );
}

export default PartOne;
