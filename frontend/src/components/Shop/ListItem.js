import {
  FavoriteBorder,
  ShoppingCartOutlined,
  Star,
  ZoomIn,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Dot,
  ItemPriceAfterDiscount,
  ItemPriceBeforeDiscount,
  TopLeftHoverItem,
} from "./GridDefault";

const Item = styled.div`
  height: 300px;
  width: 90%;
  box-shadow: 0px 0px 20px 5px rgba(248, 246, 253, 0.75);
  display: flex;
  margin: 10px;
  @media (max-width: 750px) {
    height: 600px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ItemImgContainer = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  flex: 1;
  margin: 25px;
  background-color: #f5f5f5;
  @media (max-width: 750px) {
    width: 250px;
  }
`;
const ItemImg = styled.img``;
const ItemData = styled.div`
  flex: 3;
  display: flex;
  margin: 25px;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 750px) {
    align-items: center;
  }
`;
const Dflex = styled.div`
  display: flex;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
const ItemColorContainer = styled.div`
  display: flex;
  margin-left: 40px;
  width: 60px;
  justify-content: space-around;
`;
const ItemColor = styled.div``;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-size: 18px;
  line-height: 21px;

  color: #111c85;
`;
const ItemPriceContainer = styled.div`
  display: flex;
`;

const ItemRating = styled.div`
  margin-left: 40px;
  @media (max-width: 400px) {
    margin-top: 15px;
  }
`;
const ItemDescription = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  width: 85%;

  color: #9295aa;
`;
const HoverItems = styled.div`
  display: flex;
`;
function ListItem(props) {
  return (
    <Item>
      <ItemImgContainer>
        <ItemImg src={props.imgURL} />
      </ItemImgContainer>
      <ItemData>
        <Dflex>
          <ItemName> {props.name}</ItemName>
          <ItemColorContainer>
            {props.color.map((Color, index) => (
              <Dot key={index} BGC={"#" + Color}></Dot>
            ))}
          </ItemColorContainer>
        </Dflex>
        <Dflex>
          <ItemPriceContainer>
            <ItemPriceAfterDiscount>
              {" "}
              $
              {props.discount
                ? (
                    props.price -
                    props.price * (props.discountPercent / 100)
                  ).toFixed(0)
                : props.price}
              .00
            </ItemPriceAfterDiscount>
            {props.discount && (
              <ItemPriceBeforeDiscount>
                {" "}
                ${props.price}.00
              </ItemPriceBeforeDiscount>
            )}
          </ItemPriceContainer>
          <ItemRating>
            <Star
              sx={{
                color: props.rating > 1 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: props.rating >= 2 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: props.rating >= 3 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: props.rating >= 4 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
            <Star
              sx={{
                color: props.rating >= 5 ? "#FFC107" : "#B2B2B2",
                height: "15px",
                width: "15px",
              }}
            />
          </ItemRating>
        </Dflex>
        <ItemDescription>{props.description}</ItemDescription>
        <HoverItems>
          <TopLeftHoverItem>
            {" "}
            <Link to={`/product/${props._id}`}>
              <ShoppingCartOutlined sx={{ heigh: "15px", width: "15px" }} />
            </Link>
          </TopLeftHoverItem>
          <TopLeftHoverItem>
            {" "}
            <Link to={`/product/${props._id}`}>
              <FavoriteBorder sx={{ heigh: "15px", width: "15px" }} />
            </Link>
          </TopLeftHoverItem>
          <TopLeftHoverItem>
            {" "}
            <Link to={`/product/${props._id}`}>
              <ZoomIn sx={{ heigh: "15px", width: "15px" }} />
            </Link>
          </TopLeftHoverItem>
        </HoverItems>
      </ItemData>
    </Item>
  );
}

export default ListItem;
