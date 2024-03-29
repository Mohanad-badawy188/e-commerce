import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Clock from "../../../images/image 1162.png";
import Table from "../../../images/image 1161.png";
import axios from "axios";

const Container = styled.div`
  display: flex;
  margin: 100px auto;
  justify-content: space-around;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Item = styled.div`
  width: 420px;
  height: 270px;
  background-color: ${(props) => props.BGC};
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  padding: 10px;
  position: relative;
  margin:  15px;
  @media (max-width: 550px) {
width: 80%;
  }

`;
const ItemHeader = styled.div`
  margin: 20px 30px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 26px;
  @media (max-width: 1100px) {
    margin: 20px auto;
  }
  @media (max-width: 1100px) {
    font-size: 16px;
  }
  color: #151875;
`;
const ItemLink = styled.div`
  margin: 0px 30px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  cursor: pointer;

  color: #fb2e86;
`;
const ItemImg = styled.img`
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 70%;
  height: 70%;
`;
const ChairContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Chair = styled.div`
  width: 267px;
  height: 80px;
  display: flex;
  align-items: center;
`;
const ChairImgContainer = styled.div`
  background-color: #f5f6f8;
  padding: 5px 12px;
  margin-right: 15px;
`;
const ChairImg = styled.img``;
const ChairData = styled.div`
  display: block;
`;
const ChairName = styled.div`
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: #151875;
`;
const ChairPrice = styled.div`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  text-decoration-line: line-through;

  color: #151875;
`;
function PartTwo() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/product?limit=3&&category=chair`,
        });
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);

  function Items(props) {
    return (
      <Item BGC={props.BGC}>
        <ItemHeader>{props.Header}</ItemHeader>
        <ItemLink>{props.Link}</ItemLink>
        <ItemImg src={props.imgURL} />
      </Item>
    );
  }
  function Chairs(props) {
    return (
      <Chair>
        <ChairImgContainer>
          <ChairImg src={props.imgURL} />
        </ChairImgContainer>
        <ChairData>
          <ChairName>{props.name}</ChairName>
          <ChairPrice>{props.price}.00</ChairPrice>
        </ChairData>
      </Chair>
    );
  }

  return (
    <Container>
      <Items
        Header={"23% off in all products"}
        Link={"Shop Now"}
        imgURL={Clock}
        BGC="#FFF6FB"
      />
      <Items
        Header={"23% off in all products"}
        Link={"View Collection"}
        imgURL={Table}
        BGC="#EEEFFB"
      />

      <ChairContainer>
        {products?.products?.map((item) => (
          <Chairs
            key={item._id}
            imgURL={item.imgURL}
            name={item.name}
            price={item.discount && item.price}
          />
        ))}
      </ChairContainer>
    </Container>
  );
}

export default PartTwo;
