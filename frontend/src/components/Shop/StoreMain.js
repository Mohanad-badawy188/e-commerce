import React, { useEffect, useState } from "react";
import FilterItems from "./FilterItems";

import {
  ArrowForwardIos,
  LastPage,
  FirstPage,
  ArrowBackIos,
} from "@mui/icons-material";
import styled from "styled-components";
import axios from "axios";
import GridDefault from "./GridDefault";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import Hpic from "../../images/HomePageS6.png";


const Container = styled.div`
  margin: 60px;
`;
const Wrap = styled.div`
  display: flex;
`;
const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
`;
const ChangePage = styled.div`
  display: flex;
  width: 400px;
  margin: auto;
`;
const PageNumContainer = styled.span`
  margin: auto;
  width: 170px;
  overflow: hidden;
  display: flex;
`;
const PageNum = styled.div`
  border: 1px solid #e0d3f5;
  border-radius: 2px;
  color: #e0d3f5;
  padding: 5px 10px;
  margin: 10px;
  background-color: ${(props) => props.bgc};
  cursor: pointer;
  transform: translateX(${(props) => props.pagebtn * -171}px);
  height: 25px;

  min-width: 15px;
  text-align: center;
`;
const PageBtn = styled.button`
  background-color: white;
  border: none;
  margin: 10px;
  width: 50px;
  height: 50px;
  text-align: center;
  margin: auto;
  align-items: center;
  cursor: pointer;
  color: #fb2ca8;
`;
const ImgContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  margin-top: 100px;

`

function StoreMain() {
  const filter = useSelector((state) => state.filter);
  const [Product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [pagebtn, setPagebtn] = useState(0);
  const limit = filter.pages;
  console.log(limit);
  let btnPages = Math.ceil(totalPage / 3);
  const Pages = new Array(totalPage).fill(null).map((v, i) => i);
  console.log(filter);
  useEffect(() => {
    const filterItems = async () => {
      const filterData = await axios.post(
        `http://localhost:5000/api/product/filter?limit=${limit}&&page=${
          page - 1
        }
        `,

        {
          brands: filter.brands.length > 0 ? filter.brands : false,
          categories: filter.categories.length > 0 && filter.categories,
          ratings: filter.ratings.length > 0 && filter.ratings,
          discounts: filter.discounts.length > 0 && filter.discounts,
          prices: filter.prices.length > 0 && filter.prices,
          searchItem: filter.search && filter.search,
          sort: filter.sort && filter.sort,
        }
      );

      setProduct(filterData.data.products);
      setTotalPage(filterData.data.TotalPages);
      console.log(filterData.data);
    };
    filterItems();
  }, [filter, page]);
  useEffect(() => {
    setPage(1);
    setPagebtn(0);
  }, [filter]);

  const handlePrevPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
      setPagebtn(page / 3 - 1);
    }
  };
  const handleNextPage = () => {
    if (page === totalPage) {
      return;
    } else {
      setPage(page + 1);
      const test = Math.floor(page / 3);
      setPagebtn(test);
    }
  };
  const handleNextFourPages = () => {
    if (pagebtn == btnPages - 1) {
      return setPagebtn(pagebtn);
    } else {
      setPagebtn(pagebtn + 1);
      const test = pagebtn * 3 + 3 + 1;
      setPage(test);
    }
  };
  const handlePrevFourPages = () => {
    if (pagebtn < 1) {
    } else {
      setPagebtn(pagebtn - 1);
      setPage(pagebtn * 3);
    }
  };

  return (
    <Container>
      <Wrap>
        <FilterItems />
        <RightSide>
          {filter.view === "grid" ? (
            Product &&
            Product.map((item) => (
              <GridDefault
                _id={item._id}
                key={item._id}
                name={item.name}
                imgURL={item.imgURL}
                color={item.color}
                price={item.price}
                discount={item.discount}
                discountPercent={item.discountPercent}
              />
            ))
          ) : (
            Product &&
            Product.map((item) => (
              <ListItem
                _id={item._id}
                key={item._id}
                name={item.name}
                imgURL={item.imgURL}
                color={item.color}
                price={item.price}
                discount={item.discount}
                discountPercent={item.discountPercent}
                rating = {item.rating}
                description = {item.desc}
              />
            ))
          ) }
        </RightSide>
      </Wrap>
      <ChangePage>
        <PageBtn onClick={handlePrevFourPages}>
          <FirstPage />
        </PageBtn>
        <PageBtn onClick={handlePrevPage}>
          <ArrowBackIos />
        </PageBtn>
        <PageNumContainer>
          {Pages.map((pageIndex, index) => (
            <PageNum
              key={index}
              pagebtn={pagebtn}
              bgc={page === pageIndex + 1 ? "#FB2CA8" : "white"}
              onClick={(e) => {
                e.preventDefault, setPage(pageIndex + 1);
              }}>
              {pageIndex + 1}
            </PageNum>
          ))}
        </PageNumContainer>
        <PageBtn onClick={handleNextPage}>
          <ArrowForwardIos />
        </PageBtn>
        <PageBtn onClick={handleNextFourPages}>
          <LastPage />
        </PageBtn>
      </ChangePage>
      <ImgContainer>
        <img src={Hpic} />
      </ImgContainer>
    </Container>
  );
}

export default StoreMain;
