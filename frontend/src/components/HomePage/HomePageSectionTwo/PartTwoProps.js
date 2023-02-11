import React from "react";
import {
  ShoppingCartOutlined,
  FavoriteBorder,
  ZoomIn,
} from "@mui/icons-material";
import SaleImg from "../../../images/SaleImg.png";
import PropTypes from "prop-types";

import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
const Item = styled.div`
  height: 320px;
  width: 25%;
  margin: 50px;
  position: relative;
  @media (max-width: 1300px) {
    width: 300px;
  }
`;

const ImgContainer = styled.div`
  height: 290px;
  width: 100%;
  display: flex;
  background-color: #f7f7f7;
  ${Item}:hover & {
    background-color: white;

    transition: all 0.5s ease;
  }
`;
const ItemImg = styled.img`
  margin: auto;
  align-items: center;
  width: 300px;
  height: 265px;
`;
const ItemData = styled.div`
  background-color: white;
  margin: 10px 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 19px;
  color: #151875;
  border-bottom: 2px solid #eeeffb;
  cursor: pointer;
`;
const ItemPrice = styled.div`
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;
  justify-content: end;
  text-align: end;
  margin: 5px 15px;
  display: flex;
  color: #151875;
`;
const ItemPriceBeforeDiscount = styled.div`
  font-family: "Josefin Sans";
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: line-through;
  margin-left: 10px;
  color: #fb2448;
`;
const Sale = styled.img`
  position: absolute;
  top: 10px;
  left: 30px;
  display: none;
  ${Item}:hover & {
    display: block;
  }
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
const TopLeftHoverItem = styled.div`
  cursor: pointer;
  margin: 15px;
  color: #2f1ac4;
  padding: 10px;
  &:hover {
    color: rgba(19, 137, 255, 1);
    transition: all ease 0.5s;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
function PartTwoProps(item) {
  return (
    <Item
      as={motion.div}
      initial={{ opacity: 0 }}
      PartTwo
      animate={{ opacity: 1 }}
      layout
      key={item._id}>
      <ImgContainer>
        <ItemImg src={item.imgURL} />
      </ImgContainer>
      <ItemData>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>
          $
          {item.discount
            ? (item.price - item.price * (item.discountPercent / 100)).toFixed(
                0
              )
            : item.price}
          .00
          <ItemPriceBeforeDiscount>
            {item.discount && item.price.toFixed(0) + ".00"}
          </ItemPriceBeforeDiscount>
        </ItemPrice>
      </ItemData>
      {item.discount && <Sale src={SaleImg} />}
      <TopLeftHover>
        <TopLeftHoverItem>
          {" "}
          <ShoppingCartOutlined />
        </TopLeftHoverItem>
        <TopLeftHoverItem>
          {" "}
          <FavoriteBorder />
        </TopLeftHoverItem>
        <TopLeftHoverItem>
          {" "}
          <ZoomIn />
        </TopLeftHoverItem>
      </TopLeftHover>
    </Item>
  );
}

PartTwoProps.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  discountPercent: PropTypes.number,
};
export default PartTwoProps;
