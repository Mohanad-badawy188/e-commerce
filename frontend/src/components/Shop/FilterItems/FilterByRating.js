import React from 'react'
import styled from 'styled-components';
import { Check } from "@mui/icons-material";
import { Star, StarBorder } from "@mui/icons-material";
import { Header, Rating } from '../FilterItems';

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

function FilterByRating() {
    const RatingItems = (props) => {
        return (
          <BrandItems>
            <ItemCheckBox
              type="checkbox"
              name={props.name}
              value={props.value}
              color={props.color}
            />
            <ItemsCheck Bgc={props.Bgc} color={props.color}>
              <CheckBox>
                <Check sx={{ heigh: "14px", width: "14px" }} />
              </CheckBox>
            </ItemsCheck>{" "}
            <Star sx={{ color: props.firstStar, height: "15px", width: "15px" }} />
            <Star sx={{ color: props.secondStar, height: "15px", width: "15px" }} />
            <Star sx={{ color: props.thirdStar, height: "15px", width: "15px" }} />
            <Star sx={{ color: props.fourthStar, height: "15px", width: "15px" }} />
            <Star sx={{ color: props.fifthStar, height: "15px", width: "15px" }} />
          </BrandItems>
        );
      };
  return (
    <Rating>
    <Header>Rating Item</Header>

    <RatingItems
      firstStar="#FFC107"
      secondStar="#FFC107"
      thirdStar="#FFC107"
      fourthStar="#FFC107"
      fifthStar="#B2B2B2"
      name="4"
      Bgc="#FFF6DA"
      color="#FFCC2E"
      value="rating"
    />
    <RatingItems
      firstStar="#FFC107"
      secondStar="#FFC107"
      thirdStar="#FFC107"
      fourthStar="#B2B2B2"
      fifthStar="#B2B2B2"
      name="3"
      value="rating"
      Bgc="#FFF6DA"
      color="#FFCC2E"
    />
    <RatingItems
      firstStar="#FFC107"
      secondStar="#FFC107"
      thirdStar="#B2B2B2"
      fourthStar="#B2B2B2"
      fifthStar="#B2B2B2"
      name="2"
      value="rating"
      Bgc="#FFF6DA"
      color="#FFCC2E"
    />
    <RatingItems
      firstStar="#FFC107"
      secondStar="#B2B2B2"
      thirdStar="#B2B2B2"
      fourthStar="#B2B2B2"
      fifthStar="#B2B2B2"
      name="1"
      value="rating"
      Bgc="#FFF6DA"
      color="#FFCC2E"
    />
  </Rating>
  )
}

export default FilterByRating
