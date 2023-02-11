import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import deleteItem from "../../images/Group253.png";
import check from "../../images/check.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  min-height: 100vh;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
  @media (max-width: 650px) {
    width: 95%;
  }
`;

const LeftSide = styled.div`
  margin: 200px auto;
  width: 65%;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;
const LeftSideTitles = styled.div`
  display: flex;
`;
const Title = styled.div`
  flex: 1;
  display: flex;
  font-family: "Josefin Sans";
  font-size: 20px;
  line-height: 23px;
  color: #1d3178;
  @media (max-width: 650px) {
    display: block;
  }
`;

const RightSide = styled.div`
  margin-top: 200px;
  margin-left: 100px;
  flex: 2;
  text-align: center;
`;
const Item = styled.div`
  display: flex;
  margin: 50px 0px;
  font-size: 20px;
  align-items: center;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;
const ItemDataAndImg = styled.div`
  flex: 2;
  text-align: center;
  margin: auto;
  display: flex;
  @media (max-width: 650px) {
  }
`;
const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto 0px;
  margin-left: 10px;
  height: 60px;
  text-align: center;
`;
const ItemImgContainer = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background-color: #c4c4c4;
  @media (max-width: 650px) {
    width: 50px;
    height: 50px;
  }
`;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;
const ItemSize = styled.div`
  font-family: "Josefin Sans";
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;

  color: #a1a8c1;
`;
const ItemPrice = styled.div`
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;
  flex: 1;
  color: #15245e;
`;
const ItemQuantity = styled.div`
  flex: 1;
  display: flex;
  font-family: "Josefin Sans";
  font-size: 25px;
  line-height: 14px;
  align-items: center;

  color: #bebfc2;
`;
const ChangeQuantityContainer = styled.div`
  background-color: #e7e7ef;
  align-items: center;
  width: 70px;
  display: flex;
  justify-content: space-between;
`;
const ChangeQuantity = styled.button`
  border: none;
  height: 20px;
  width: 20px;
  align-items: center;
  background-color: #bebfc2;
  color: #e7e7ef;
  padding: auto;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const QuantityNumber = styled.div`
  font-size: 15px;
`;
const ItemTotal = styled.div`
  flex: 1;
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;
  color: #15245e;
`;
const DeleteProduct = styled.div`
  position: absolute;
  right: -5px;
  top: -10px;
  cursor: pointer;
`;
export const TotalPrice = styled.div`
  height: 300px;
  width: 400px;
  background-color: #f4f4fc;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  @media (max-width: 650px) {
    width: 95%;
    align-items: center;
  }
`;
export const TextAndPrice = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e6f1;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #1d3178;
`;
export const Price = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #15245e;
`;
export const SmallText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #8a91ab;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const Btn = styled.button`
  height: 40px;
  width: 300px;
  margin: auto;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  background: #19d16f;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 650px) {
    width: 90%;
  }
  color: #ffffff;
`;
const ClearBtn = styled.button`
  margin: auto;
  border: none;
  width: 150px;
  height: 50px;
  background: #fb2e86;
  border-radius: 2px;
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: #ffffff;
`;

function CartPage() {
  const [products, setProducts] = useState([]);
  const User = useSelector((state) => state.user.user);
  const user = User.foundUser;
  const TOKEN = User.accessToken;
  const totalPrice = products.reduce((total, item) => {
    return total + item?.product?.price * item?.quantity;
  }, 0);
  console.log(totalPrice);
  const GetItems = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:5000/api/cart/find/${user._id}`,
        headers: { token: `Bearer ${TOKEN}` },
      });

      setProducts(res.data);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetItems();
  }, []);
  const handleIncrease = async (id, quantity) => {
    try {
      const res = await axios({
        method: "put",

        url: `http://localhost:5000/api/cart/${id}`,
        headers: { token: `Bearer ${TOKEN}` },
        data: { quantity: quantity + 1 },
      });
      if (res.data) {
        await GetItems();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleClear = async () => {
    try {
      const res = await axios({
        method: "delete",
        url: `http://localhost:5000/api/cart`,
        headers: { token: `Bearer ${TOKEN}` },
      });
      if (res.data) {
        await GetItems();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDecrease = async (id, quantity) => {
    try {
      const res = await axios({
        method: "put",

        url: `http://localhost:5000/api/cart/${id}`,
        headers: { token: `Bearer ${TOKEN}` },
        data: { quantity: quantity - 1 },
      });
      if (res.data) {
        await GetItems();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios({
        method: "delete",
        url: `http://localhost:5000/api/Cart/${id}`,
        headers: { token: `Bearer ${TOKEN}` },
      });
      if (res.data) {
        await GetItems();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <LeftSide>
        <LeftSideTitles>
          <Title style={{ flex: "2" }}>Product</Title>
          <Title>Price</Title>
          <Title>Quantity</Title>
          <Title>Total</Title>
        </LeftSideTitles>
        {products.map((item) => (
          <Item key={item._id}>
            <ItemDataAndImg>
              <ItemImgContainer>
                <DeleteProduct onClick={() => handleDelete(item._id)}>
                  {" "}
                  <img src={deleteItem} />
                </DeleteProduct>
                <img src={item?.product?.imgURL} />
              </ItemImgContainer>
              <ItemData>
                <ItemName>{item?.product?.name}</ItemName>
                <ItemSize>{item?.product?.size}</ItemSize>
              </ItemData>
            </ItemDataAndImg>
            <ItemPrice>$ {item?.product?.price}.00</ItemPrice>
            <ItemQuantity>
              <ChangeQuantityContainer>
                {" "}
                <ChangeQuantity
                  onClick={() => handleDecrease(item._id, item.quantity)}
                  name="decrease">
                  -
                </ChangeQuantity>
                <QuantityNumber>{item?.quantity} </QuantityNumber>
                <ChangeQuantity
                  onClick={() => handleIncrease(item._id, item.quantity)}
                  name="increase">
                  +
                </ChangeQuantity>
              </ChangeQuantityContainer>
            </ItemQuantity>
            <ItemTotal>$ {item?.product?.price * item?.quantity}.00</ItemTotal>
          </Item>
        ))}
        {products.length > 0 && (
          <ClearBtn onClick={handleClear}>Clear Cart</ClearBtn>
        )}
      </LeftSide>
      <RightSide>
        <LeftSideTitles>
          <Title style={{ flex: "2", justifyContent: "center" }}>
            Cart Totals
          </Title>
        </LeftSideTitles>
        <TotalPrice>
          <TextAndPrice>
            <div>Subtotals</div>

            {totalPrice > 0 ? <Price>${totalPrice}.00</Price> : 0}
          </TextAndPrice>
          <TextAndPrice>
            <div>Totals</div>

            {totalPrice > 0 ? <Price>${totalPrice + 50}.00</Price> : 0}
          </TextAndPrice>
          <SmallText>
            {" "}
            <CheckCircleIcon
              sx={{
                height: "10px",
                width: "10px",
                marginRight: "5px",
                color: "#19D16F",
              }}
            />
            Shipping & taxes calculated at checkout
          </SmallText>
          {products.length > 0 ? (
            <Link to={"/Submitcart"} style={{ margin: "auto" }}>
              <Btn>Proceed To Checkout</Btn>
            </Link>
          ) : (
            <Btn>Proceed To Checkout</Btn>
          )}
        </TotalPrice>
      </RightSide>
    </Container>
  );
}

export default CartPage;
