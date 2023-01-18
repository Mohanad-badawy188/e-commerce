import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/FilterSlice";
import { Header, Price } from "../FilterItems";
import Item from "./FilterItem";

function FIlterByPrice() {
  const [filter, setFilters] = useState([]);
  const dispatch = useDispatch();
  const handleCLick = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const test = value.split("-");
    const minValue = parseInt(test[0]);
    const maxValue = parseInt(test[1]);
    let data = {minValue : minValue,maxValue:maxValue };
    if (checked === true) {
      setFilters((filter) => [...filter,data]);
    } else if (checked === false) {
   
      setFilters((filter) => filter.filter((x) => x.maxValue !== data.maxValue));
    }
  };
  useEffect(() => {
    dispatch(setPrice(filter));
  }, [filter]);
  return (
    <Price>
      <Header>Price Filter</Header>
      <Item
        name="$0.00 - $150.00"
        value="0-150"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="$150.00 - $350.00"
        value="150-350"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="$150.00 - $504.00"
        value="150-504"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
      <Item
        name="$500 +"
        value="500-100000"
        Bgc="#FFDBF1"
        color="#FF3EB2"
        handleCLick={handleCLick}
      />
    </Price>
  );
}

export default FIlterByPrice;
