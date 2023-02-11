import React from "react";
import styled from "styled-components";
import { FacebookOutlined, Twitter, Instagram } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  background: #e7e4f8;
  margin: auto;
  align-items: center;
  @media (max-width: 400px) {
    display: block;
    text-align: center;
    height: 100px;
  }
`;
const CopyRight = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #9da0ae;
`;
const IconsContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 400px) {
    padding-top: 20px;
    width: 50%;
    margin: auto;
  }
`;
const Icons = styled.div`
  cursor: pointer;
  color: #151875;
`;
function CopyRights() {
  return (
    <Container>
      <IconsContainer>
        <Icons>
          <FacebookOutlined />
        </Icons>
        <Icons>
          <Twitter />
        </Icons>
        <Icons>
          <Instagram />
        </Icons>
      </IconsContainer>
      <CopyRight>©Webecy - All Rights Reserved</CopyRight>
    </Container>
  );
}

export default CopyRights;
