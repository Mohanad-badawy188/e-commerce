import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Pic from "../../images/HomeSec3.png";
import { Btn } from "./HomePageSectionOne";

const Container = styled.div`
  height: ${(props) => props.height || "600px"};
  width: 100vw;
  background-color: ${(props) => props.BackGroundColor || "#f1f0ff"};
  display: flex;
  align-items: center;
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const Img = styled.img`
  width: 558px;
  height: 550px;
  object-fit: cover;
`;
const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 65%;
  justify-content: space-between;
`;
const Heading = styled.div`
  font-family: "Josefin Sans";
  font-size: 35px;
  line-height: 132%;
  width: 55%;

  letter-spacing: 0.015em;

  color: #151875;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 140px;
`;
const Item = styled.div`
  display: flex;
`;
const Dot = styled.div`
  height: 11px;
  width: 11px;
  background-color: ${(props) => props.BGC};
  border-radius: 50%;
  margin-top: 5px;
`;
const Text = styled.div`
  margin-left: 10px;
  width: 45%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 132%;

  letter-spacing: 0.015em;

  color: #acabc3;
`;
const BtnAndPrice = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  font-weight: 400;

  margin-left: 18px;
  color: #151875;
`;

function HomePageSectionThree(props) {
  return (
    <Container height={props.height} BackGroundColor={props.BackGroundColor}>
      <LeftSide>
        <Img src={Pic} />
      </LeftSide>
      <RightSide>
        <Heading>Unique Features Of leatest & Trending Poducts</Heading>
        <Items>
          <Item>
            {" "}
            <Dot BGC="#F52B70"></Dot>
            <Text>
              All frames constructed with hardwood solids and laminates
            </Text>{" "}
          </Item>
          <Item>
            {" "}
            <Dot BGC="#2B2BF5"></Dot>
            <Text>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </Text>{" "}
          </Item>
          <Item>
            {" "}
            <Dot BGC="#2BF5CC"></Dot>
            <Text>Arms, backs and seats are structurally reinforced</Text>
          </Item>
        </Items>
        <BtnAndPrice>
          <Btn>Add To Cart</Btn>
          <Price>
            B&B Italian Sofa <br /> $32.00{" "}
          </Price>
        </BtnAndPrice>
      </RightSide>
    </Container>
  );
}

export default HomePageSectionThree;
