import React from "react";
import styled from "styled-components";
import { Check } from "@mui/icons-material";
import { Star, StarBorder } from "@mui/icons-material";

const BrandItems = styled.label`
  display: ${(props) => props.display};
  position: relative;
  margin: 20px;
  cursor: pointer;
  z-index: 1;
  animation-name: filters;
  animation-duration: 1s;
  @keyframes filters {
    0% {
      top: -100%;
    }

    100% {
      top: 0px;
    }
  }
`;

const ItemsCheck = styled.div`
  height: 16px;
  width: 20px;
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

const RatingItems = (props) => {
  return (
    <BrandItems display={props.display}>
      <ItemCheckBox
        type="checkbox"
        name={props.name}
        value={props.value}
        color={props.color}
        onClick={props.handleCLick}
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
export default RatingItems;
