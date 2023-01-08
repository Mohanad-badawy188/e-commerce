import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCat } from "../../redux/FilterSlice";
import { Categories, Header } from "../FilterItems";
import Item from "./FilterItem";

function FilterByCategories() {
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
    dispatch(setCat(filter));
  }, [filter]);
  return (
    <Categories>
      <Header>Categories</Header>
      <Item
        name="Prestashop"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="Magento"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="Accessories"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="Bags"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="osCommerce"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="Bigcommerce"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="New Arrival"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="Best Seller"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="Featured Products"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
    </Categories>
  );
}

export default FilterByCategories;
