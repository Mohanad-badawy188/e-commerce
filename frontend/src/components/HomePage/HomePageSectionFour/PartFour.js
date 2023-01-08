import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PartFour.css";
import { Pagination } from "swiper";
const Container = styled.div`
  width: 75%;
  margin: auto;
  height: 700px;
`;
const Header = styled.div`
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;

  color: #151875;
`;
const ItemContainer = styled.div`
  display: flex;
`;
const Item = styled.div`
  margin: 50px;
  :hover {
    animation-name: example;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
`;
const ItemImgContainer = styled.div`
  background: #f6f7fb;
  height: 270px;
  width: 270px;
  border-radius: 50%;
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  display: flex;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  ${Item}:hover & {
    box-shadow: -5px 8px 0px 1px #9877e7;
    transition: all 1s ease-out;
  }
`;
const ItemImg = styled.img`
  margin: auto;

  align-items: center;
`;
const ItemBtn = styled.button`
  display: none;
  border: none;
  width: 100px;
  height: 40px;
  position: absolute;
  bottom: 20px;
  left: 80px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: white;
  background: #08d15f;
  border-radius: 2px;

  ${Item}:hover & {
    display: block;
  }
`;
const ItemNameAndPrice = styled.div`
  text-align: center;
  margin-top: 25px;
  color: #151875;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
`;
const ItemPrice = styled.div`
  font-size: 16px;
  line-height: 16px;
  margin-top: 10px;
`;
const ItemName = styled.div`
  font-size: 20px;
  line-height: 20px;
`;
function PartFour() {
  const products = useSelector((state) => state.products.products);
  console.log(products)

  const FilteredProducts = products.filter((item) =>
    item.categories.includes("top")
  );

  return (
    <Container>
      <Header>Top Categories</Header>
      <ItemContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet`,
            renderBullet: (index, className) => {
              return `<span class="${className} feature-pagination"></span>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper ">
          {FilteredProducts &&
            FilteredProducts.map((item) => (
              <SwiperSlide key={item._id}>
                <Item>
                  <ItemImgContainer>
                    <ItemImg src={item.imgURL} />
                    <ItemBtn>View Shop</ItemBtn>
                  </ItemImgContainer>
                  <ItemNameAndPrice>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>${item.price}.00</ItemPrice>
                  </ItemNameAndPrice>
                </Item>
              </SwiperSlide>
            ))}
        </Swiper>
      </ItemContainer>
    </Container>
  );
}

export default PartFour;
