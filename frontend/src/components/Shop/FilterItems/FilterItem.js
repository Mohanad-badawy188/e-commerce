import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Check } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
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

const Item = (props) => {

  return (
    <BrandItems>
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
      {props.name}
    </BrandItems>
  );
};
export default Item;
