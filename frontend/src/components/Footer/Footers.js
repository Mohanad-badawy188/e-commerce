import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  background: #eeeffb;
  @media (max-width: 900px) {
    height: 1300px;
  }
`;
const Wrap = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  padding-top: 80px;
  justify-content: space-around;
  @media (max-width: 900px) {
    display: block;
  }
`;
const Hekto = styled.div`
  display: flex;
  flex-direction: column;
`;
const HektoHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 38px;
  line-height: 45px;

  color: #000000;
`;
const SignUpForm = styled.div`
  display: flex;
  margin-top: 40px;
`;
const EmailInput = styled.input`
  border: none;
  padding: 12px 30px;
  background: #ffffff;
  opacity: 0.45;
  border-radius: 3px;
  @media (max-width: 400px) {
    display: none;
  }
`;
const EmailBtn = styled.button`
  border: none;
  background: #fb2e86;
  border-radius: 3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  @media (max-width: 400px) {
    display: none;
  }
  padding: 12px 40px;
  color: #eeeffb;
`;
const Contact = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 20px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #8a8fb9;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  margin-left: 60px;
`;
const Header = styled.div`
  font-family: "Josefin Sans";
  font-size: 22px;
  line-height: 26px;

  color: #000000;
  margin-bottom: 30px;
`;
const Items = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  cursor: pointer;
  color: #8a8fb9;
`;
const CustomerCare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  margin-left: 60px;
`;

const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  margin-left: 60px;
`;

function Footers() {
  return (
    <Container>
      <Wrap>
        <Hekto>
          <HektoHeader>Hekto</HektoHeader>
          <SignUpForm>
            <EmailInput placeholder="Enter Email Address" type="text" />
            <EmailBtn>Sign Up</EmailBtn>
          </SignUpForm>
          <Contact>
            <div>Contact info</div>
            <div>17 Princess Road, London, Greater London NW1 8JR, UK</div>
          </Contact>
        </Hekto>
        <Categories>
          <Header>Catagories</Header>
          <Items>Laptops & Computers</Items>
          <Items>Cameras & Photography</Items>
          <Items>Smart Phones & Tablets</Items>
          <Items>Video Games & Consoles</Items>
          <Items>Waterproof Headphones</Items>
        </Categories>
        <CustomerCare>
          <Header>Customer Care</Header>
          <Items>My Account</Items>
          <Items>Discount</Items>
          <Items>Returns</Items>
          <Items>Orders History</Items>
          <Items>Order Tracking</Items>
        </CustomerCare>
        <Pages>
          <Header>Pages</Header>
          <Items>Blog</Items>
          <Items>Browse the Shop</Items>
          <Items>Category</Items>
          <Items>Pre-Built Pages</Items>
          <Items>Visual Composer Elements</Items>
          <Items>WooCommerce Pages</Items>
        </Pages>
      </Wrap>
    </Container>
  );
}

export default Footers;
