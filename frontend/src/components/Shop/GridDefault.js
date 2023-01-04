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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ShopItem from "./ShopItem";
import { Button } from "@mui/material";

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
const PageBtn = styled.button `
background-color: white;
border:  none;
margin: 10px;
width: 50px;
height: 50px;
text-align: center;
margin: auto;
align-items: center;
cursor: pointer;
color:#FB2CA8 ;


`

function GridDefault() {
  const [Product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [pagebtn, setPagebtn] = useState(0);

  const [limit, setLimit] = useState(9);

  const btnPages = Math.ceil(totalPage / 3);
  const Pages = new Array(totalPage).fill(null).map((v, i) => i);
  useEffect(() => {
    const Items = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/product?limit=${limit}&&page=${page - 1}
          `
      );
      setProduct(res.data.products);
      setTotalPage(res.data.TotalPages);
    };
    Items();
  }, [page]);
  const handlePrevPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
      setPagebtn(page/3-1)
    }
  };
  const handleNextPage = () => {
    if (page === totalPage) {
      return;
    } else {
      setPage(page + 1 );
      const test = Math.floor((page/3))
      setPagebtn(test)
    }
  };
  const handleNextFourPages = () => {
    if (pagebtn == btnPages-1 ) {
      return setPagebtn(pagebtn);
    } else {
      setPagebtn(pagebtn + 1 );
      const test = pagebtn * 3 + 3 + 1;
      setPage(test);
    }
  };
  const handlePrevFourPages = () => {
    if (pagebtn < 1 ) {
    } else {
      setPagebtn(pagebtn-1 );
      setPage(pagebtn * 3);
    }
  };
  console.log(pagebtn);
  const test = (e) => {
    console.log(e);
  };
  const handlePageClick = (event) => {
    console.log(event.target.innerText);
  };
  return (
    <Container>
      <Wrap>
        <FilterItems />
        <RightSide>
          {Product &&
            Product.map((item) => (
              <ShopItem
                _id={item._id}
                key={item._id}
                name={item.name}
                imgURL={item.imgURL}
                color={item.color}
                price={item.price}
                discount={item.discount}
              />
            ))}
        </RightSide>
      </Wrap>
      <ChangePage>
        <PageBtn onClick={handlePrevFourPages}><FirstPage /></PageBtn>
        <PageBtn onClick={handlePrevPage}><ArrowBackIos /></PageBtn>
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
                <PageBtn onClick={handleNextPage}>< ArrowForwardIos /></PageBtn>
        <PageBtn onClick={handleNextFourPages}><LastPage /></PageBtn>

      </ChangePage>
    </Container>
  );
}

export default GridDefault;
