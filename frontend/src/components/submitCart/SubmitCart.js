import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  Btn,
  Price,
  SmallText,
  TextAndPrice,
  TotalPrice,
} from "../Cart/CartPage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Container = styled.div`
  min-height: 100vh;
`;
const Wrap = styled.div`
  margin: 150px 50px;
  @media (max-width: 600px) {
    margin: 150px 10px;
  }

  display: flex;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  height: 1000px;
  flex: 2;
  background: #f8f8fd;
  border-radius: 3px;
  padding-top: 75px;
  padding-left: 50px;
`;
const Header = styled.div`
  font-family: "Josefin Sans";
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 50px;
  color: #1d3178;
`;
const FullWidthInput = styled.input`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  border: none;
  padding: 10px 20px;
  border-bottom: 2px solid #bfc6e0;
  width: 80%;
  background: #f8f8fd;

  letter-spacing: 0.02em;
  margin: 20px 0px;

  color: #c1c8e1;
  @media (max-width: 450px) {
    width: 65%;
  }
`;
const HalfWidthInput = styled.input`
  font-family: "Lato";
  padding: 10px 20px;
  margin: 20px 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  flex: 1;
  width: 40%;
  background: #f8f8fd;
  border: none;
  border-bottom: 2px solid #bfc6e0;
  margin-right: 34px;
  letter-spacing: 0.02em;

  color: #c1c8e1;
`;
const ShopBtn = styled.button`
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 19px;
  background: #fb2e86;
  border-radius: 4px;
  border: none;
  height: 50px;
  width: 200px;
  color: #ffffff;
  margin: 100px auto;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const RightSide = styled.div`
  flex: 1;

  margin-left: 50px;
  @media (max-width: 1150px) {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 380px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e4;
  padding-bottom: 10px;
  margin-bottom: 10px;
  @media (max-width: 450px) {
    display: block;
    width: 95%;
    text-align: center;
    height: 150px;
  }
`;
const ItemData = styled.div`
  display: flex;
`;
const ItemImgContainer = styled.div`
  height: 87px;
  width: 83px;
  border-radius: 3px;
  display: flex;
  background-color: #a1a8c1;
  margin-right: 15px;
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;
const ItemSizeAndQuantity = styled.div`
  font-family: "Josefin Sans";
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;
  color: #a1a8c1;
`;
const ItemPrice = styled.div`
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;
  @media (max-width: 450px) {
    margin: 40px;
  }
  color: #15245e;
`;

function SubmitCartPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const User = useSelector((state) => state.user.user);
  const user = User.foundUser;
  const userId = user._id;
  const TOKEN = User.accessToken;
  const totalPrice = products.reduce((total, item) => {
    return total + item?.product?.price * item?.quantity;
  }, 0);
  console.log(totalPrice);
  const getItems = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:5000/api/cart/find/${user._id}`,
        headers: { token: `Bearer ${TOKEN}` },
      });
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      err;
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = async (data) => {
    if (totalPrice === 0) return;
    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:5000/api/order`,
        headers: { token: `Bearer ${TOKEN}` },
        data: { userId, products: products, address: data, price: totalPrice },
      });
    } catch (e) {
      console.log(e);
    }
    const res = await axios({
      method: "delete",
      url: `http://localhost:5000/api/cart`,
      headers: { token: `Bearer ${TOKEN}` },
    });
    await getItems();
    navigate("/orderCompleted");
  };
  console.log(products);

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        action="/ordercompleted">
        <Wrap>
          <LeftSide>
            <Header>Contact Information</Header>
            <FullWidthInput
              placeholder="Email or mobile phone number"
              {...register("EmailOrMobile", {
                required: "Please enter your Email or Mobile Number.",
              })}
            />
            {errors.EmailOrMobile && (
              <div style={{ color: "red" }}>{errors.EmailOrMobile.message}</div>
            )}

            <Header style={{ marginTop: "80px" }}>Shipping address</Header>
            <HalfWidthInput
              placeholder="First name "
              {...register("FirstName", {
                required: "Please enter your Name.",
              })}></HalfWidthInput>
            {errors.FirstName && (
              <div style={{ color: "red" }}>{errors.FirstName.message}</div>
            )}

            <HalfWidthInput
              placeholder="Last name"
              {...register("LastName")}></HalfWidthInput>
            <FullWidthInput
              placeholder="Address"
              {...register("Address", {
                required: "Please enter your Address.",
              })}
            />

            {errors.Address && (
              <div style={{ color: "red" }}>{errors.Address.message}</div>
            )}
            <FullWidthInput
              placeholder="Appaetnentment,suit,e.t.c (optinal)"
              {...register("Appaetnentment")}></FullWidthInput>
            <FullWidthInput
              placeholder="City"
              {...register("City")}></FullWidthInput>
            <HalfWidthInput
              placeholder="Egypt"
              {...register("Country")}></HalfWidthInput>
            <HalfWidthInput
              placeholder="Postal Code"
              {...register("PostalCode")}></HalfWidthInput>
            {/* <Link to={"/shop"}> */}
            <ShopBtn type="button">Continue Shipping</ShopBtn>
            {/* </Link> */}
          </LeftSide>
          <RightSide>
            {products.map((item) => (
              <Item key={item._id}>
                <ItemData>
                  <ItemImgContainer>
                    <img src={item.product.imgURL} />
                  </ItemImgContainer>
                  <ItemDetails>
                    <ItemName>{item.product.name}</ItemName>
                    <ItemSizeAndQuantity>
                      {" "}
                      Size : {item.product.size}
                    </ItemSizeAndQuantity>
                    <ItemSizeAndQuantity>
                      Quantity : {item.quantity}
                    </ItemSizeAndQuantity>
                  </ItemDetails>
                </ItemData>
                <ItemPrice>$ {item.quantity * item.product.price}.00</ItemPrice>
              </Item>
            ))}

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
                <Btn type="submit"> Checkout</Btn>
              ) : (
                <Btn type="button"> Checkout</Btn>
              )}
            </TotalPrice>
          </RightSide>
        </Wrap>
      </form>
    </Container>
  );
}

export default SubmitCartPage;
