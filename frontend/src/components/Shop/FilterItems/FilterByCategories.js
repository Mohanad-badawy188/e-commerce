import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCat } from "../../redux/FilterSlice";
import { Categories, Header } from "../FilterItems";
import Item from "./FilterItem";

function FilterByCategories() {
  const [filter, setFilters] = useState([]);
  const [display, setDisplay] = useState(false);

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
  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <Categories>
      <Header onClick={handleDisplay}>Categories</Header>
      <Item
        display={display ? "flex" : "none"}
        name="Prestashop"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="Magento"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="Accessories"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="Bags"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="osCommerce"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="Bigcommerce"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="New Arrival"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
        name="Best Seller"
        value="categories"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        display={display ? "flex" : "none"}
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
