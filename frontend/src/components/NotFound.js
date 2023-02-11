import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import notFound from "../images/notFound.png";
import Footer from "./Footer";
import Header from "./Header";
const Container = styled.div`
  min-height: 100vh;
`;
const Wrap = styled.div`
  height: 750px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
  width: 170px;
  height: 50px;
  background: #fb2e86;
  border-radius: 3px;
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 160% */
margin: auto;
border: none;
cursor: pointer;
  color: #ffffff;
`;
function NotFound() {
  return (
    <div>
      <Header />
      <Container>
        <Wrap>
          <img src={notFound} />
          <Link to={"/"} style={{margin:"auto"}}>
          <Btn>Back To Home</Btn>
          </Link>
        </Wrap>
      </Container>
      <Footer />
    </div>
  );
}

export default NotFound;
