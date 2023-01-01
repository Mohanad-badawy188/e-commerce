import React from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ItemLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  flex: 1;
`;
const ItemRightSide = styled.div`
  flex: 1;
`;
const ItemHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 35px;
  line-height: 132%;

  letter-spacing: 0.015em;

  color: #151875;
`;
const ItemRedHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 21px;
  line-height: 132%;
  letter-spacing: 0.015em;

  color: #fb2e86;
`;
const ItemText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  width: 80%;
  letter-spacing: 0.02em;

  color: #b7bacb;
`; /* or 176% */

const ItemAdvantagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
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

const ItemImg = styled.img``;
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
