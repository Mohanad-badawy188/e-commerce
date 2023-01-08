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
  margin-left: 150px;
`;
export const Brand = styled.div`
  margin-bottom: 50px;
`;
export const Header = styled.div`
  display: flex;

  font-family: "Josefin Sans";
  font-size: 20px;
  line-height: 20px;
  width: fit-content;
  border-bottom: 1px solid #000000;
  text-align: center;
  color: #151875;
  text-align: center;
  margin-left: 40px;
  margin-bottom: 25px;
  padding-bottom: -1px;
`;
const BrandItems = styled.label`
  display: flex;
  position: relative;
  margin: 20px;
  cursor: pointer;
`;

const ItemsCheck = styled.div`
  height: 16px;
  width: 16px;
  background: ${(props) => props.Bgc};
  border: none;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  color: ${(props) => props.color};
`;
const ItemCheckBox = styled.input`
  visibility: hidden;
  &:checked + ${ItemsCheck} {
    background: ${(props) => props.color};
    color: white;
  }
`;
const CheckBox = styled.div`
  top: -4px;
  left: 1px;
  position: absolute;
`;
export const Discount = styled.div`
  margin-bottom: 50px;
`;

export const Rating = styled.div`
  margin-bottom: 50px;
`;

export const Categories = styled.div`
  margin-bottom: 50px;
`;
export const Price = styled.div`
  margin-bottom: 50px;
`;
function FilterItems( ) {
  const handleClick = (e) => {
    console.log(e.target.checked, e.target.name, e.target.value);
  };

  return (
    <Container>
      <FilterByBrand  />
      <FilterByDiscount />
      <FilterByRating />

      <FilterByCategories />
      <FIlterByPrice  />
    </Container>
  );
}

export default FilterItems;
