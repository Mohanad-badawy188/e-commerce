import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MailOutline,
  WifiCalling3,
  ShoppingCartOutlined,
  ExpandMore,
  PermIdentity,
  FavoriteBorder,
} from "@mui/icons-material";
const HeadingBar = styled.div`
  background-color: #7e33e0;
  height: 45px;
  display: flex;
  justify-content: space-around;
`;
const HeadingLeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const Email = styled.div`
  margin-left: 10px;
  margin-right: 50px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #f1f1f1;
`;
const Number = styled.div`
  margin-left: 10px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  color: #f1f1f1;
`;

const HeadingRightSide = styled.div`
  display: flex;
  align-items: center;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  color: #f1f1f1;
`;
const Language = styled.div`
  margin-right: 15px;
  padding: 1px;
  cursor: pointer;
  position: relative;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
`;
const Currency = styled.div`
  margin-right: 15px;
  cursor: pointer;
  padding: 1px;

  position: relative;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
`;
const Login = styled.div`
  margin-right: 15px;

  padding: 3px;

  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
`;

const WishList = styled.div`
  margin-right: 15px;
  cursor: pointer;
  padding: 1px;

  display: flex;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
`;
const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  min-width: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const Item = styled.div`
  color: black;
  padding: 6px 6px;
  text-decoration: none;
  display: block;
  &:hover {
    color: violet;
  }
`;
function Headingbar() {
  const [display, setDisplay] = useState("none");
  const [displays, setDisplays] = useState("none");
  const handleClickOutside = (event) => {
    setDisplays("none");
    setDisplay("none");
  };

  const HandleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      11;
      setDisplay("none");
    }
  };
  const HandleClickCurrency = (event) => {
    if (displays === "none") {
      setDisplays("block");
    } else {
      setDisplays("none");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <HeadingBar>
      <HeadingLeftSide>
        <MailOutline sx={{ color: "white", width: "16px", height: "16px" }} />
        <Email>mohanad2012987@gmail.com</Email>
        <WifiCalling3 sx={{ color: "white", width: "16px", height: "16px" }} />
        <Number>01100617775</Number>
      </HeadingLeftSide>
      <HeadingRightSide>
        <Language onClick={HandleClick}>
          English
          <ExpandMore sx={{ color: "white", width: "16px", height: "16px" }} />
          <Dropdown style={{ display: display }}>
            <Item>English</Item>
            <Item>Arabic</Item>
          </Dropdown>
        </Language>
        <Currency onClick={HandleClickCurrency}>
          USD
          <ExpandMore
            sx={{ color: "white", width: "16px", height: "16px" }}
          />{" "}
          <Dropdown style={{ display: displays }}>
            <Item>USD</Item>
            <Item>EGP</Item>
          </Dropdown>
        </Currency>
        <Login>
          Login
          <PermIdentity
            sx={{ color: "white", width: "16px", height: "16px" }}
          />
        </Login>
        <WishList>
          Wishlist
          <FavoriteBorder
            sx={{
              color: "white",
              width: "16px",
              height: "16px",
              marginLeft: "2px",
            }}
          />
        </WishList>
        <ShoppingCartOutlined
          sx={{
            color: "white",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
      </HeadingRightSide>
    </HeadingBar>
  );
}

export default Headingbar;
