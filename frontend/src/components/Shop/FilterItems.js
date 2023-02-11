import React from "react";
import styled from "styled-components";
import { Check } from "@mui/icons-material";
import Item from "./FilterItems/FilterItem";
import FilterByBrand from "./FilterItems/FilterByBrand";
import FilterByDiscount from "./FilterItems/FilterByDiscount";
import FilterByRating from "./FilterItems/FilterByRating";
import FilterByCategories from "./FilterItems/FilterByCategories";
import FIlterByPrice from "./FilterItems/FIlterByPrice";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 30px;
  @media (max-width: 1000px) {
    flex-direction: row;
    width:95%;
    flex-wrap: wrap;
  }
`;
export const Brand = styled.div`
  margin-right: 20px;
  overflow: hidden;
`;
export const Header = styled.div`
  z-index: 100;
  display: flex;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-size: 20px;
  line-height: 20px;
  min-width: 140px;
  display: flex;

  text-decoration: underline;
  color: #151875;
  margin-left: 20px;
  margin-bottom: 25px;
  padding-bottom: 1px;
`;

export const Discount = styled.div`
  overflow: hidden;
`;

export const Rating = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Categories = styled.div`
  overflow: hidden;
`;
export const Price = styled.div`
  margin-bottom: 50px;
  overflow: hidden;
`;
const FilterHeader = styled.div`
  border-bottom: none;
  cursor: default;
  font-size: 25px;
  margin-bottom: 30px;
  font-family: "Josefin Sans";
`;
function FilterItems() {
  const handleClick = (e) => {
    console.log(e.target.checked, e.target.name, e.target.value);
  };

  return (
    <Container>
      <FilterHeader>Filters </FilterHeader>
      <FilterByBrand />
      <FilterByDiscount />
      <FilterByRating />

      <FilterByCategories />
      <FIlterByPrice />
    </Container>
  );
}

export default FilterItems;
