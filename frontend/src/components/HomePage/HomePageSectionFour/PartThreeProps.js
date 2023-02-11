import React from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;
const ItemLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;

  @media (max-width: 1400px) {
    align-items: center;
  }
  @media (max-width: 650px) {
    margin: 100px auto;
  }
  @media (max-width: 450px) {
    margin: 150px auto;
  }
`;
const ItemRightSide = styled.div``;
const ItemHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 35px;
  line-height: 132%;

  letter-spacing: 0.015em;

  color: #151875;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    margin: 50px auto;
  }

`;
const ItemRedHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 21px;
  line-height: 132%;
  letter-spacing: 0.015em;

  color: #fb2e86;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;
const ItemText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  width: 70%;
  letter-spacing: 0.02em;

  color: #b7bacb;
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`; /* or 176% */

const ItemAdvantagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  @media (max-width: 1400px) {
    margin: auto;
  }
  @media (max-width: 650px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: auto;
  }
`;
const ItemAdvantagesItems = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  margin-top: 10px;
  width: 50%;
  letter-spacing: 0.02em;
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    width: 90%;
    margin: 20px auto;
  }
  color: #b8b8dc;
`;
const ItemBtn = styled.button`
  font-family: "Josefin Sans";
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.02em;
  background: #fb2e86;
  border-radius: 2px;
  color: #ffffff;
  width: 170px;
  height: 50px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
`;

const ItemImg = styled.img`
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 200px;
    margin-top: 300px;
  }
`;
const Items = (props) => {
  return (
    <Item>
      <ItemLeftSide>
        <ItemHeader>{props.Header}</ItemHeader>
        <ItemRedHeader>{props.miniHeader}</ItemRedHeader>
        <ItemText>{props.text}</ItemText>
        <ItemAdvantagesContainer>
          <ItemAdvantagesItems>
            <CheckIcon /> Material expose like metals
          </ItemAdvantagesItems>
          <ItemAdvantagesItems>
            {" "}
            <CheckIcon />
            Simple neutral colours.
          </ItemAdvantagesItems>
          <ItemAdvantagesItems>
            <CheckIcon /> Clear lines and geomatric figures
          </ItemAdvantagesItems>
          <ItemAdvantagesItems>
            <CheckIcon /> Material expose like metals
          </ItemAdvantagesItems>
        </ItemAdvantagesContainer>
        <ItemBtn>Shop Now</ItemBtn>
      </ItemLeftSide>
      <ItemRightSide>
        <ItemImg src={props.img} />
      </ItemRightSide>
    </Item>
  );
};

export default Items;
