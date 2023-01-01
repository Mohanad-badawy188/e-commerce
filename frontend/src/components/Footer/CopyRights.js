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
`;
const Icons = styled.div`
  cursor: pointer;
`;
function CopyRights() {
  return (
    <Container>
      <CopyRight>©Webecy - All Rights Reserved</CopyRight>
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
    </Container>
  );
}

export default CopyRights;
