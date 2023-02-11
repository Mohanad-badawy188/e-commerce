import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, Rating } from "../FilterItems";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../redux/FilterSlice";
import RatingItems from "./filterByRatingFunc";

function FilterByRating() {
  const [filter, setFilters] = useState([]);
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const handleCLick = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    console.log(checked);
    if (checked === true) {
      setFilters((filter) => [...filter, name]);
    } else if (checked === false) {
      if (filter.includes(name))
        setFilters((filter) => filter.filter((x) => x !== name));
    }
  };
  useEffect(() => {
    dispatch(setRating(filter));
  }, [filter]);
  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <Rating>
      <Header onClick={handleDisplay}>Rating Item</Header>

      <RatingItems
        display={display ? "flex" : "none"}
        firstStar="#FFC107"
        secondStar="#FFC107"
        thirdStar="#FFC107"
        fourthStar="#FFC107"
        fifthStar="#B2B2B2"
        name="4"
        Bgc="#FFF6DA"
        color="#FFCC2E"
        value="rating"
        handleCLick={handleCLick}
      />
      <RatingItems
        display={display ? "flex" : "none"}
        firstStar="#FFC107"
        secondStar="#FFC107"
        thirdStar="#FFC107"
        fourthStar="#B2B2B2"
        fifthStar="#B2B2B2"
        name="3"
        value="rating"
        Bgc="#FFF6DA"
        color="#FFCC2E"
        handleCLick={handleCLick}
      />
      <RatingItems
        display={display ? "flex" : "none"}
        firstStar="#FFC107"
        secondStar="#FFC107"
        thirdStar="#B2B2B2"
        fourthStar="#B2B2B2"
        fifthStar="#B2B2B2"
        name="2"
        value="rating"
        Bgc="#FFF6DA"
        color="#FFCC2E"
        handleCLick={handleCLick}
      />
      <RatingItems
        display={display ? "flex" : "none"}
        firstStar="#FFC107"
        secondStar="#B2B2B2"
        thirdStar="#B2B2B2"
        fourthStar="#B2B2B2"
        fifthStar="#B2B2B2"
        name="1"
        value="rating"
        Bgc="#FFF6DA"
        color="#FFCC2E"
        handleCLick={handleCLick}
      />
    </Rating>
  );
}

export default FilterByRating;
