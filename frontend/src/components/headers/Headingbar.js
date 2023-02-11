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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const HeadingBar = styled.div`
  background-color: #7e33e0;
  height: 45px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 950px) {
    justify-content: space-between;
    padding-left: 50px;
  }
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
  @media (max-width: 500px) {
    width: 10px !important;
  }
`;
const Number = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  color: #f1f1f1;
  @media (max-width: 600px) {
    display: none;
  }
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
const Items = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    height: 400px;
    position: absolute;
    height: 100%;
    width: 50%;
    right: 0px;
    top: 44px;
    background-color: rgba(1, 1, 1, 0.8);
    z-index: 100;
    animation-name: example;
    animation-duration: 1s;
    display: ${(props) => (props.toggler ? "flex" : "none")};

    @keyframes example {
      0% {
        right: -60%;
        top: 44px;
      }

      100% {
        right: 0px;
        top: 44px;
      }
    }
  }
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
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;
const Currency = styled.div`
  margin-right: 15px;
  cursor: pointer;
  padding: 1px;
  color: white;
  position: relative;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
  @media (max-width: 950px) {
    margin-top: 20px;
  }
`;
const Login = styled.div`
  margin-right: 15px;

  padding: 3px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
  &:active {
    text-decoration: none;
    border: none;
  }
  @media (max-width: 950px) {
    margin-top: 20px;
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
  @media (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;
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
const Toggle = styled.button`
  @media (min-width: 950px) {
    display: none;
  }
  margin-right: 15px;
  cursor: pointer;
  padding: 3px;
  border: none;
  background-color: #7e33e0;
  border: none;
  color: white;
  height: 100%;
  width: 70px;
  font-size: 40px;
  float: right;
`;
function Headingbar() {
  const [display, setDisplay] = useState("none");
  const [displays, setDisplays] = useState("none");
  const handleClickOutside = (event) => {
    setDisplays("none");
    setDisplay("none");
  };
  const user = useSelector((state) => state.user?.user?.foundUser);

  const HandleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
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
  const handleLogOut = () => {
    localStorage.clear();
    location.reload();
  };

  const [Toggler, setToggler] = useState(false);
  const handleClick = () => {
    setToggler((cur) => !cur);
  };

  return (
    <HeadingBar>
      <HeadingLeftSide>
        <MailOutline sx={{ color: "white", width: "16px", height: "16px" }} />
        {user ? <Email>{user?.name}</Email> : <Email>mohanad</Email>}
        <Number>
          {" "}
          <WifiCalling3
            sx={{
              color: "white",
              width: "16px",
              height: "16px",
              marginRight: "10px",
            }}
          />
          01021991536
        </Number>
      </HeadingLeftSide>
      <HeadingRightSide>
        <Items toggler={Toggler}>
          <Language onClick={HandleClick}>
            English
            <ExpandMore
              sx={{ color: "white", width: "16px", height: "16px" }}
            />
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

          {user ? (
            <Currency>{user?.name}</Currency>
          ) : (
            <Link to={"/signin"} style={{ textDecoration: "none" }}>
              {" "}
              <Login>
                Login
                <PermIdentity
                  sx={{ color: "white", width: "16px", height: "16px" }}
                />
              </Login>
            </Link>
          )}

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
          {user && (
            <Currency style={{ marginLeft: "25px" }} onClick={handleLogOut}>
              Logout
            </Currency>
          )}
        </Items>
        <Toggle onClick={handleClick}>
          {Toggler ? <> &#10005;</> : <>&#8801; </>}
        </Toggle>
      </HeadingRightSide>
    </HeadingBar>
  );
}

export default Headingbar;
