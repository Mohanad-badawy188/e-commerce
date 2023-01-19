import React from "react";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  FavoriteBorder,
  ZoomIn,
  Shop,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Item = styled.div`
  height: 400px;
  width: 280px;
  margin: 30px;
`;
const ImgContainer = styled.div`
  position: relative;
  height: 290px;
  background: #f6f7fb;
  display: flex;
  cursor: pointer;
  ${Item}:hover & {
    background: #ebf4f3;
  }
`;
const ItemImg = styled.img`
  margin: auto;
  align-items: center;
`;
const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
  margin: 10px;
`;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  width: fit-content;
  margin: auto;
  cursor: pointer;
  color: #151875;
`;
const ItemColorContainer = styled.div`
  display: flex;
  width: 60px;
  margin: auto;
  justify-content: space-around;
`;
export const Dot = styled.div`
  height: 11px;
  width: 11px;
  background-color: ${(props) => props.BGC};
  border-radius: 50%;
  margin-top: 5px;
`;
const ItemPriceContainer = styled.div`
  display: flex;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  width: 120px;

  margin: auto;
  text-align: center;
  justify-content: center;
`;
export const ItemPriceAfterDiscount = styled.div`
  color: #151875;
`;
export const ItemPriceBeforeDiscount = styled.div`
  color: #fb2e86;
  text-decoration-line: line-through;
  margin-left: 20px;
`;

const TopLeftHover = styled.div`
  position: absolute;
  bottom: 20px;
  left: 10px;
  display: none;
  ${Item}:hover & {
    display: block;
    transition: all ease 0.5s;
  }
`;
export const TopLeftHoverItem = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin: 5px;
  text-align: center;

  color: #2f1ac4;
  padding: 5px;
  &:hover {
    color: rgba(19, 137, 255, 1);
    transition: all ease 0.5s;
    border-radius: 50%;
    filter: drop-shadow(0px 8px 40px rgba(49, 32, 138, 0.05));
    background-color: white;
  }
`;
function GridDefault(item) {
  return (
    <Item key={item._id}>
      <ImgContainer>
        <ItemImg src={item.imgURL} />
        <TopLeftHover>
          <TopLeftHoverItem>
            {" "}
            <Link to={`/product/${item._id}`}>
              <ShoppingCartOutlined sx={{ heigh: "15px", width: "15px" }} />
            </Link>
          </TopLeftHoverItem>
          <TopLeftHoverItem>
            {" "}
            <Link to={`/product/${item._id}`}>
              <FavoriteBorder sx={{ heigh: "15px", width: "15px" }} />
            </Link>
          </TopLeftHoverItem>
          <TopLeftHoverItem>
            {" "}
            <Link to={`/product/${item._id}`}>
              <ZoomIn sx={{ heigh: "15px", width: "15px" }} />
            </Link>
          </TopLeftHoverItem>
        </TopLeftHover>
      </ImgContainer>
      <ItemData>
        <ItemName>{item.name}</ItemName>
        <ItemColorContainer>
          {item.color.map((Color, index) => (
            <Dot key={index} BGC={"#" + Color}></Dot>
          ))}
        </ItemColorContainer>
        <ItemPriceContainer>
          <ItemPriceAfterDiscount>
            {" "}
            $
            {item.discount
              ? (
                  item.price -
                  item.price * (item.discountPercent / 100)
                ).toFixed(0)
              : item.price}
            .00
          </ItemPriceAfterDiscount>
          {item.discount && (
            <ItemPriceBeforeDiscount> ${item.price}.00</ItemPriceBeforeDiscount>
          )}
        </ItemPriceContainer>
      </ItemData>
    </Item>
  );
}

export default GridDefault;
