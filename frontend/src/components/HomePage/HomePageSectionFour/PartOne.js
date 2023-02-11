import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 100px auto;

`;
const Header = styled.div`
  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;
  margin-top: 100px;
  text-align: center;
  color: #151875;
`;
const ItemsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  @media (max-width: 1100px) {
    margin: auto 40px;
    justify-content: space-between;

}
  @media (max-width: 850px) {

    flex-direction: column;
    align-items: center;
}
`;
const Item = styled.div`
  height: 350px;
  width: 270px;
  filter: drop-shadow(0px 8px 40px rgba(49, 32, 138, 0.05));
  background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  @media (max-width: 1100px) {
width: 230px;
height: 380px;
}
@media (max-width: 850px) {

margin:40px auto;
}
`
;
const ItemImgContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:  auto;
  background-color: #f5f6f8;
  width: 90%;

`;
const ItemImg = styled.img``;
const ItemData = styled.div`
  text-align: center;
  width: 50%;
  margin: auto;
`;
const ItemName = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  text-align: center;

  color: #151875;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const ItemPriceAfterDiscount = styled.div`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 14px;

  text-align: center;

  color: #151875;
`;
const ItemPriceBeforeDiscount = styled.div`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 12px;

  text-align: center;
  text-decoration-line: line-through;

  color: rgba(21, 24, 117, 0.3);
`;
function PartOne() {

  const [products,setProducts]=useState([])
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/product?limit=4&&category=trending`,
        });
        setProducts(res.data)
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);


  return (
    <Container>
      <Header>Trending Products</Header>
      <ItemsContainer>
        {products?.products?.map((item) => (
          <Item key={item._id}>
            <ItemImgContainer>
              <ItemImg src={item.imgURL} />
            </ItemImgContainer>
            <ItemData>
              <ItemName>{item.name}</ItemName>
              <Price>
                <ItemPriceAfterDiscount>
                  {" "}
                  {item.discount
                    ? (
                        item.price -
                        item.price * (item.discountPercent / 100)
                      ).toFixed(0)
                    : item.price}
                  .00
                </ItemPriceAfterDiscount>
                <ItemPriceBeforeDiscount>
                  {item.discount && item.price.toFixed(0) + ".00"}
                </ItemPriceBeforeDiscount>
              </Price>
            </ItemData>
          </Item>
        ))}
      </ItemsContainer>
    </Container>
  );
}
export default PartOne;
