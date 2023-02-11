import { Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 70px;
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
`;
const Logo = styled.div`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 34px;

  color: #0d0e43;
`;
const List = styled.ul`
  display: flex;
  width: 500px;
  justify-content: space-around;
  @media (max-width: 670px) {
    width: 300px;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
const Item = styled.li`
  list-style: none;
  cursor: pointer;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #0d0e43;
  &:hover {
    color: #fb2e86;
  }
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const SearchInput = styled.input`
  height: 35px;
  border: 1px solid rgba(1, 1, 1, 0.5);
  border-right: none;
  padding: 0px 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;
const SearchButton = styled.button`
  background-color: #fb2e86;
  border: none;
  height: 37px;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <LeftSide>
        <Logo>Hekto</Logo>
        <List>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Item>Home</Item>
          </Link>
          <Item>Pages</Item>
          <Item>Products</Item>
          <Item>Blog</Item>
          <Link to={"/shop"} style={{ textDecoration: "none" }}>
            <Item>Shop</Item>
          </Link>
          <Item>Contact</Item>
        </List>
      </LeftSide>
      <RightSide>
        <SearchInput />{" "}
        <SearchButton>
          <Search sx={{ color: "white" }} />
        </SearchButton>
      </RightSide>
    </Container>
  );
};

export default Navbar;
