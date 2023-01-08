import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../redux/FilterSlice";
import { Header, Discount } from "../FilterItems";
import Item from "./FilterItem";

function FilterByDiscount() {
  const [filter, setFilters] = useState([]);
  const dispatch = useDispatch();
  const handleCLick = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    if (checked === true) {
      setFilters((filter) => [...filter, name]);
    } else if (checked === false) {
      if (filter.includes(name))
        setFilters((filter) => filter.filter((x) => x !== name));
    }
  };
  useEffect(() => {
    dispatch(setDiscount(filter));
  }, [filter]);
  return (
    <Discount>
      <Header>Discount Offer</Header>
      <Item
        name={"10% Discount Offer"}
        Bgc="#FFDBF1"
        color="#FF3EB2"
        value="Discount"
        handleCLick={handleCLick}
      />
      <Item
        name={"20% Discount Offer"}
        Bgc="#FFDBF1"
        color="#FF3EB2"
        value="Discount"
        handleCLick={handleCLick}
      />

      <Item
        name={"30% Discount Offer"}
        Bgc="#FFDBF1"
        color="#FF3EB2"
        value="Discount"
        handleCLick={handleCLick}
      />
    </Discount>
  );
}

export default FilterByDiscount;
