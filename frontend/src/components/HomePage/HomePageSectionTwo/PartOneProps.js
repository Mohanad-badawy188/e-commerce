import React from "react";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  FavoriteBorder,
  ZoomIn,
} from "@mui/icons-material";
import PropTypes from "prop-types";

const Item = styled.div`
  flex-shrink: 0;
  height: 420px;
  width: 285px;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  margin: auto 20px;
  position: relative;
`;
const ItemImgContainer = styled.div`
  background: #f6f7fb;
  height: 300px;
  width: 100%;
  display: flex;

  ${Item}:hover & {
    background-color: #f7f7f7;

    transition: all ease 0.5s;
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
  height: 120px;
  text-align: center;
  ${Item}:hover & {
    background-color: #2f1ac4;
    transition: all ease 0.5s;
  }
`;
const ItemName = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #fb2e86;
  ${Item}:hover & {
    color: #ffffff;

    transition: all ease 0.5s;
  }
`;

const CodeAndPrice = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #151875;
  ${Item}:hover & {
    color: #ffffff;
    transition: all ease 0.5s;
  }
`;

const Colors = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;
const ItemColor = styled.div`
  border-radius: 10px;
  height: 4px;
  width: 15px;
  background-color: ${(props) => props.BackGroundColor};
  margin: auto 4px;
`;
const TopLeftHover = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: none;
  ${Item}:hover & {
    display: flex;
    transition: all ease 0.5s;
  }
`;
const TopLeftHoverItem = styled.div`
  cursor: pointer;
  margin-left: 15px;
  color: rgba(19, 137, 255, 1);
  &:hover {
    color: #2f1ac4;
    transition: all ease 0.5s;
  }
`;

const HoverBtn = styled.button`
  position: absolute;
  top: 240px;
  left: 100px;
  background-color: #08d15f;
  color: white;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  display: none;
  cursor: pointer;
  &:hover {
    background-color: #fb2e86;
    transition: all ease 0.5s;
  }
  ${Item}:hover & {
    display: block;
    transition: all ease 0.2s;
  }
`;
function PartOneProps(props) {
  return (
    <Item>
      <ItemImgContainer>
        <ItemImg src={props.imgURL} />
      </ItemImgContainer>
      <ItemData>
        <ItemName>{props.name}</ItemName>
        <Colors>
          {props.color?.map((Color, index) => (
            <ItemColor key={index} BackGroundColor={"#" + Color}></ItemColor>
          ))}
        </Colors>
        <CodeAndPrice>code - {props.code}</CodeAndPrice>
        <CodeAndPrice>${props.price}.00</CodeAndPrice>
      </ItemData>

      <TopLeftHover>
        <TopLeftHoverItem>
          {" "}
          <ShoppingCartOutlined sx={{}} />
        </TopLeftHoverItem>
        <TopLeftHoverItem>
          {" "}
          <FavoriteBorder sx={{}} />
        </TopLeftHoverItem>
        <TopLeftHoverItem>
          {" "}
          <ZoomIn sx={{}} />
        </TopLeftHoverItem>
      </TopLeftHover>
      <HoverBtn>View Details</HoverBtn>
    </Item>
  );
}

PartOneProps.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  code: PropTypes.string,
  color: PropTypes.array,
};
export default PartOneProps;
