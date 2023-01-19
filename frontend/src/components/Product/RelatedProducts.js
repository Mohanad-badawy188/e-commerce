import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImgContainer } from "../Shop/StoreMain";
import Hpic from "../../images/HomePageS6.png";
import axios from "axios";
import { Star } from "@mui/icons-material";
import { ItemPriceAfterDiscount, ItemPriceBeforeDiscount } from "../Shop/GridDefault";
const Container = styled.div`
  width: 65%;
  margin: auto;
`;
const Header = styled.div`
  font-family: "Josefin Sans";
  font-size: 36px;
  line-height: 42px;
  color: #101750;
`;
const ItemsContainer = styled.div`
  display: flex;
  margin:  150px 0px;
  width: 1200px;
  justify-content: space-between;
`;
const Item = styled.div`
  height: 300px;
  width: 280px;
`;
const ItemImgContainer = styled.div`
  height: 250px;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ItemRatingAndName = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;
const ItemName = styled.div`
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  /* Text */

  color: #151875;
`;
const ItemRatingContainer = styled.div`
  margin: 5px;
`;
const ItemPriceContainer = styled.div`
display: flex;
justify-content: center;
`;
function RelatedProducts(props) {
  const [items, setItems] = useState([]);
  let categories = [...[props?.categories]];
  let brands = [...[props?.brands]];
  categories = categories.flat();
  brands = brands.flat();
  console.log(categories);
  useEffect(() => {
    const GetItems = async () => {
      const res = await axios.post(
        `http://localhost:5000/api/product/filter/related?limit=4
        `,
        {
          brands: brands?.length > 0 && brands,
          categories: categories?.length > 0 && categories,
        }
      );
      setItems(res.data);
      console.log(res.data);
    };
    GetItems();
  }, [props]);
  return (
    <Container>
      <Header>Related Products</Header>
      <ItemsContainer>
        {items?.products?.map((item) => (
          <Item key={item._id}>
            <ItemImgContainer>
              <img src={item.imgURL} />
            </ItemImgContainer>
            <ItemRatingAndName>
              <ItemName>{item.name}</ItemName>
              <ItemRatingContainer>
                <Star
                  sx={{
                    color: item.rating  > 1? "#FFC107" : "#B2B2B2",
                    height: "15px",
                    width: "15px",
                  }}
                />
                <Star
                  sx={{
                    color: item.rating >= 2 ? "#FFC107" : "#B2B2B2",
                    height: "15px",
                    width: "15px",
                  }}
                />
                <Star
                  sx={{
                    color: item.rating >= 3 ? "#FFC107" : "#B2B2B2",
                    height: "15px",
                    width: "15px",
                  }}
                />
                <Star
                  sx={{
                    color: item.rating >= 4 ? "#FFC107" : "#B2B2B2",
                    height: "15px",
                    width: "15px",
                  }}
                />
                <Star
                  sx={{
                    color: (item.rating >= 5 ? "#FFC107" : "#B2B2B2"),
                    height: "15px",
                    width: "15px",
                  }}
                />
              </ItemRatingContainer>
            </ItemRatingAndName>
            <ItemPriceContainer>
            <ItemPriceAfterDiscount>
              {" "}
              $
              {item.discount
                ? (
                    item.price -
                    item.price * (item.discountPercent / 100)
                  ).toFixed(0)
                : props.price}
              .00
            </ItemPriceAfterDiscount>
            {item.discount && (
              <ItemPriceBeforeDiscount>
                {" "}
                ${item.price}.00
              </ItemPriceBeforeDiscount>
            )}

            </ItemPriceContainer>
          </Item>
        ))}
      </ItemsContainer>

      <ImgContainer>
        <img src={Hpic} />
      </ImgContainer>
    </Container>
  );
}

export default RelatedProducts;
