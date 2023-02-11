import React from "react";
import styled from "styled-components";
import {
  Dot,
  ItemPriceAfterDiscount,
  ItemPriceBeforeDiscount,
  TopLeftHoverItem,
} from "../Shop/GridDefault";

import { FavoriteBorder, Star } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Item = styled.div`
  box-shadow: 0px 0px 25px 10px #f6f4fd;
  border-radius: 2px;
  height: 550px;
  width: 1100px;
  margin: 120px auto;
  display: flex;
  @media (max-width: 1150px) {
    width: 800px;
    height: 700px;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
    justify-content: center;
    width: 90%;
  }
`;
const ItemImgContainer = styled.div`
  height: 500px;
  width: 400px;
  flex: 1;
  display: flex;
  align-items: center;
  margin: auto 20px;
  background-color: #c4c4c4;
  @media (max-width: 850px) {
    width: 250px;
    margin-top: 50px;
  }
`;
const ItemImg = styled.img`
  height: 70%;
  margin: auto;
`;
const ItemData = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 20px;
  @media (max-width: 850px) {
align-items: center;
  }
`;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-size: 36px;
  line-height: 42px;

  color: #0d134e;
`;
const ItemRating = styled.div``;
const ItemPriceContainer = styled.div`
  display: flex;
`;
const ItemColorContainer = styled.div`
  display: flex;
  width: 140px;
  justify-content: space-around;
  text-align: center;
`;
const ItemDataStyle = styled.div`
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-right: 30px;

  color: #151875;
`;
const ItemDescription = styled.div`
  width: 80%;
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 29px;

  color: #a9acc6;
`;
const ItemCartContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 29px;

  text-transform: capitalize;
  color: #151875;
`;
const ItemDflex = styled.div`
  display: flex;
  align-items: center;
`;
const Cat = styled.div`
  margin: 0 20px;
  justify-content: space-around;
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 29px;

  text-transform: capitalize;
  color: #151875;
`;
function ProductDetailsProps(props) {
  const product = props.product;
  return (
    <div>
      <Item>
        <ItemImgContainer>
          <ItemImg src={product.imgURL} />
        </ItemImgContainer>
        <ItemData>
          <ItemName>{product.name}</ItemName>
          <ItemRating>
            {" "}
            <Star
              sx={{
                color: product.rating > 1 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: product.rating >= 2 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: product.rating >= 3 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: product.rating >= 4 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: product.rating >= 5 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
          </ItemRating>
          <ItemPriceContainer>
            <ItemPriceAfterDiscount>
              {" "}
              $
              {product.discount
                ? (
                    product.price -
                    product.price * (product.discountPercent / 100)
                  ).toFixed(0)
                : product.price}
              .00
            </ItemPriceAfterDiscount>
            {product?.discount && (
              <ItemPriceBeforeDiscount>
                {" "}
                ${product.price}.00
              </ItemPriceBeforeDiscount>
            )}
          </ItemPriceContainer>
          <ItemColorContainer>
            {" "}
            <ItemDataStyle>Color : </ItemDataStyle>
            {product?.color?.map((Color, index) => (
              <Dot key={index} BGC={"#" + Color}></Dot>
            ))}
          </ItemColorContainer>
          <ItemDescription>{product.desc}</ItemDescription>
          <ItemCartContainer>
            {" "}
            <ItemDataStyle
              onClick={props.handleCLick}
              style={{ cursor: "pointer" }}>
              Add to Cart
            </ItemDataStyle>
            <TopLeftHoverItem>
              <Link to={"/Cart"} style={{ textDecoration: "none" }}>
                <FavoriteBorder
                  sx={{ heigh: "20px", width: "20px" }}
                  onClick={props.handleCLick}
                />
              </Link>
            </TopLeftHoverItem>
          </ItemCartContainer>
          <ItemDflex>
            <ItemDataStyle>Categories :</ItemDataStyle>
            {product?.categories?.map((item, index) => (
              <Cat key={index}>{item} </Cat>
            ))}
          </ItemDflex>
          <ItemDflex>
            {" "}
            <ItemDataStyle>Brand :</ItemDataStyle>
            <Cat>{product.brand}</Cat>
          </ItemDflex>
        </ItemData>
      </Item>
    </div>
  );
}

export default ProductDetailsProps;
