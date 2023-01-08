import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "../../redux/FilterSlice";
import { Brand, Header } from "../FilterItems";
import Item from "./FilterItem";

function FilterByBrand(props) {
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
    dispatch(setBrand(filter));
  }, [filter]);
  return (
    <Brand>
      <Header>Product Brand</Header>

      <Item
        name={"Coaster Furniture"}
        Bgc={"#E5E0FC"}
        color={"#603EFF"}
        value="brand"
        handleCLick={handleCLick}
      />
      <Item
        name={"Fusion Dot High Fashion"}
        Bgc={"#E5E0FC"}
        color={"#603EFF"}
        value="brand"
        handleCLick={handleCLick}
      />
      <Item
        name={"Unique Furnitture Restor"}
        Bgc={"#E5E0FC"}
        color={"#603EFF"}
        value="brand"
        handleCLick={handleCLick}
      />
      <Item
        name={"Dream Furnitture Flipping"}
        Bgc={"#E5E0FC"}
        color={"#603EFF"}
        value="brand"
        handleCLick={handleCLick}
      />
      <Item
        name={"Young Repurposed"}
        Bgc={"#E5E0FC"}
        color={"#603EFF"}
        value="brand"
        handleCLick={handleCLick}
      />
      <Item
        name={"Green DIY furniture"}
        Bgc={"#E5E0FC"}
        color={"#603EFF"}
        value="brand"
        handleCLick={handleCLick}
      />
    </Brand>
  );
}

export default FilterByBrand;
