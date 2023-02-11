import React from "react";
import styled from "styled-components";
import ImgOnSale from "../../images/imgOnSale.png";
import LampImage from "../../images/Lamp.png";

const Wrap = styled.div`
  width: 100vw;
`;
const Container = styled.div`
  height: 700px;
  background-color: #f2f0ff;
  position: relative;
  display: flex;
  justify-content: space-around;

  padding: 0px 250px;
  @media (max-width: 1400px) {
    padding: 0px 15px 50px 250px;
  }
  @media (max-width: 1100px) {
    padding: 0px 20px;
  }
`;
const LampImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0%;
  height: 300px;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const LeftSide = styled.div`
  margin-top: 10%;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
const UpperHeader = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;

  color: #fb2e86;
`;
const Header = styled.div`
  font-family: "Josefin Sans";
  font-size: 53px;
  line-height: 82px;
  letter-spacing: 0.015em;
  font-weight: 800;
  width: 110%;
  color: #000000;
  @media (max-width: 450px) {
    font-size: 20px;
    width: 70%;
    margin: auto;
  }
`;
const Text = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  width: 77%;
  margin-bottom: 30px;
  color: #8a8fb9;
  @media (max-width: 850px) {
    text-align: center;
    margin: auto;
    margin-bottom: 30px;
  }
`;
export const Btn = styled.button`
  font-family: "Josefin Sans";
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.02em;
  background-color: #fb2e86;
  color: #ffffff;
  border: none;
  padding: 10px 30px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #2f1ac4;
  }
`;
const RightSide = styled.div`
  @media (max-width: 8500px) {
    display: none;
  }
`;
const SaleImg = styled.img`
  height: 500px;
  margin-top: 100px;
`;

function HomePageSectionOne() {
  return (
    <Wrap>
      <Container>
        <LampImg src={LampImage} />
        <LeftSide>
          <UpperHeader>Best Furniture For Your Castle....</UpperHeader>
          <Header>
            New Furniture Collection <br />
            Trends in 2020
          </Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </Text>
          <Btn>Shop Now</Btn>
        </LeftSide>
        <RightSide>
          <SaleImg src={ImgOnSale} />
        </RightSide>
      </Container>
    </Wrap>
  );
}

export default HomePageSectionOne;
