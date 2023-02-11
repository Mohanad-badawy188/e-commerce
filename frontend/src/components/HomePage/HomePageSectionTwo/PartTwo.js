import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";
import PartTwoProps from "./PartTwoProps";
import axios from "axios";
const Container = styled.div`
  min-height: 80vh;

`;
const Header = styled.div`
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;

  color: #151875;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px;
  @media (max-width: 930px) {
    display: block;
    width: fit-content;
    margin:50px auto;
    text-align: center;
  }
`;
export const NavItem = styled.div`
  margin: 0px 50px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.border};
  &:active {
    border-bottom: 1px solid #fb2e86;
    color: #fb2e86;
  }
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px 100px;
`;

function PartTwo() {
  const [categories, setCategories] = useState("New Arrival");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/product?limit=8&&category=${categories}`,
        });
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, [categories]);

  const NavItems = (props) => {
    return (
      <NavItem
        color={categories === props.name ? "#FB2E86" : "#151875"}
        border={categories === props.name ? "1px solid #fb2e86" : ""}
        onClick={() => setCategories(props.name)}>
        {props.name}
      </NavItem>
    );
  };

  return (
    <Container>
      <Header>Leatest Products</Header>
      <NavMenu>
        <NavItems name="New Arrival" />
        <NavItems name="Best Seller" />
        <NavItems name="Featured Products" />
        <NavItems name="Special Offer" />
      </NavMenu>
      <ItemsContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout>
        {products?.products?.map((item) => (
          <PartTwoProps
            key={item._id}
            name={item.name}
            imgURL={item.imgURL}
            discountPercent={item.discountPercent}
            price={item.price}
            discount={item.discount}
            _id={item._id}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default PartTwo;
