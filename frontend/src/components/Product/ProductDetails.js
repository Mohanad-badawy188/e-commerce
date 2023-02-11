import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ProductDetailsProps from "./ProductDetailsProps";
import {  useNavigate } from "react-router-dom";

import RelatedProducts from "./RelatedProducts";
const Container = styled.div`
  min-height: 85vh;
`;

function ProductDetails() {
  const Location = useLocation();
  const Id = Location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const userData = useSelector((state) => state.user.user);
  const user = userData.foundUser;
  const TOKEN = userData.accessToken;
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/product/find/${Id}`,
        });

        if (res.data) {
          setProduct(res.data);
      

        }
      } catch (e) {
        console.log(e);
      }
    };
    getItem();
  }, []);
  console.log(product);
  const handleCLick = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/cart",
        headers: { token: `Bearer ${TOKEN}` },

        data: {
          userId: user._id,
          product:  product ,
        },
      });
      if (res.data){
        navigate('/cart');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <ProductDetailsProps product={product} handleCLick={handleCLick} />
      <RelatedProducts categories={product.categories} brands={product.brand} />
    </Container>
  );
}

export default ProductDetails;
