import React, { useState } from "react";
import styled from "styled-components";
import { NavItem, NavMenu } from "../HomePageSectionTwo/PartTwo";
import ChairPic from "../../../images/ChairPic.png";
import imgOnSale from "../../../images/imgOnSale.png";
import ThirdPic from "../../../images/HomeSec3.png";

import Items from "./PartThreeProps";
const Container = styled.div`
  width: 65%;
  margin: auto;
  height: 900px;
`;
const Header = styled.div`
  margin-top: 40px;

  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;

  text-align: center;
  color: #151875;
`;

function PartThree() {
  const [categories, setCategories] = useState("Wood Chair");
  const NavItems = (props) => {
    return (
      <NavItem
        style={{ margin: "30px", alignItems: "center" }}
        color={categories === props.name ? "#FB2E86" : "#151875"}
        border={categories === props.name ? "1px solid #fb2e86" : ""}
        onClick={() => setCategories(props.name)}>
        {props.name}
      </NavItem>
    );
  };

  return (
    <Container>
      <Header>Discount Item</Header>
      <NavMenu style={{ margin: "20px" }}>
        <NavItems name="Wood Chair" />
        <NavItems name="Plastic Chair" />
        <NavItems name="Sofa Colletion" />
      </NavMenu>
      {categories === "Wood Chair" && (
        <Items
          Header={"20% Discount Of All Products"}
          miniHeader={"Eams Sofa Compact"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum. "
          }
          img={ChairPic}
        />
      )}
      {categories === "Plastic Chair" && (
        <Items
          Header={"50% Discount on These Products"}
          miniHeader={"Eams Sofa Compact"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum. "
          }
          img={imgOnSale}
        />
      )}
      {categories === "Sofa Colletion" && (
        <Items
          Header={"20% Discount Of All Products"}
          miniHeader={"Eams Sofa Compact"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum. "
          }
          img={ThirdPic}
        />
      )}
    </Container>
  );
}

export default PartThree;
