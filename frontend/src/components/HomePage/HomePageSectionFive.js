import React from "react";
import styled from "styled-components";
import img from "../../images/background.png";

const Container = styled.div`
  height: 460px;
  background-image: url(${img});
`;
const Header = styled.div`
  margin: auto;
  font-family: "Josefin Sans";
  font-size: 35px;
  line-height: 155%;
  text-align: center;
  letter-spacing: 0.015em;
  padding-top: 150px;
  color: #151875;
`;
const Btn = styled.button`
  background: #fb2e86;
  border-radius: 2px;
  width: 175px;
  height: 50px;
  cursor: pointer;
  border: none;
  color: white;
  display: block;
  text-align: center;
  align-items: center;
  margin: 50px auto;
`;
function HomePageSectionFive() {
  return (
    <Container>
      <Header>
        Get Leatest Update By Subscribe <br />
        0ur Newslater
      </Header>
      <Btn>Shop Now</Btn>
    </Container>
  );
}

export default HomePageSectionFive;
