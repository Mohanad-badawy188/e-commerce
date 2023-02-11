import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import correct from "../images/correct.png";
import topLeft from "../images/topLeft.png";
import botRight from "../images/botRight.png";
import Hpic from "../images/HomePageS6.png";

import { Link } from "react-router-dom";
import { ImgContainer } from "./Shop/StoreMain";
import { Img } from "./HomePage/HomePageSectionSix";
const Container = styled.div`
  min-height: 90vh;
  margin-top: 150px;
`;
const Wrap = styled.div`
  height: 400px;
  width: 80%;
  margin: auto;
  border-left: 3px dotted #d2d1d1;
  border-bottom: 3px dotted #d2d1d1;
  text-align: center;
  position: relative;
  @media (max-width: 650px) {
    height: 600px;
  }
  @media (max-width: 450px) {
    width: 60%;
  }
`;
const ImgContainers = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-family: "Josefin Sans";
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin-bottom: 40px;

  color: #101750;
`;
const Text = styled.div`
  width: 80%;
  margin: auto;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 50px;
  text-align: center;

  color: #8d92a7;
`;
const Btn = styled.button`
  background: #ff1788;
  border-radius: 3px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  width: 200px;
  height: 60px;
  text-align: center;
  border: none;
  cursor: pointer;
  color: #ffffff;
`;
const TopLeftImg = styled.img`
  position: absolute;
  top: -50px;
  left: -50px;
`;
const BotRightImg = styled.img`
  position: absolute;
  bottom: -35px;
  right: -50px;
`;
function OrderCompleted() {
  return (
    <div>
      <Header />
      <Container>
        <Wrap>
          <ImgContainers>
            <img src={correct} />{" "}
          </ImgContainers>
          <Title>Your Order Is Completed! </Title>
          <Text>
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </Text>
          <Link to={"/shop"}>
            <Btn>Continue Shopping</Btn>
          </Link>
          <TopLeftImg src={topLeft} />
          <BotRightImg src={botRight} />
        </Wrap>

        <ImgContainer>
          <Img src={Hpic} />
        </ImgContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default OrderCompleted;
