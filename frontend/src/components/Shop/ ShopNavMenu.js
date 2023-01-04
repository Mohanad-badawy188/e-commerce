import React from "react";
import styled from "styled-components";
import { GridViewRounded, FormatListBulleted } from "@mui/icons-material";

const Container = styled.div``;
const NavMenu = styled.div`
  color: black;
  height: 50px;
  width: 90%;
  margin: 60px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LeftSide = styled.div`
  font-family: "Josefin Sans";
  font-size: 22px;
  line-height: 26px;

  color: #151875;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
const ItemsNum = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin: 30px;
  color: #3f509e;
`;
const ItemsNumInput = styled.input`
  width: 50px;
  margin-left: 10px;
  border: 1px solid #e7e6ef;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;
const Sort = styled.div`
  margin: 30px;
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;


color: #3F509E;

`;
const SortInput = styled.select`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #8a8fb9;
  background-color: white;
  border: 1px solid #e7e6ef;
  padding: 4px;
  outline: none;
`;
const View = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #3F509E;
`;

const SearchInput = styled.input`
margin: 30px;
width: 120px;
height: 20px;
outline: none;
border: 1px solid #e7e6ef;
border-radius: 5px;
padding: 5px;
`;

function ShopNavMenu() {
  return (
    <Container>
      <NavMenu>
        <LeftSide>Ecommerce Acceories & Fashion item</LeftSide>
        <RightSide>
          <ItemsNum>
            Per Page:
            <ItemsNumInput type="number" />
          </ItemsNum>
          <Sort>
            Sort By:{" "}
            <SortInput>
              <option>Best Match</option>
              <option>price(asc)</option>
              <option>Price(desc)</option>
            </SortInput>
          </Sort>
          <View>
            View:
              <GridViewRounded sx={{ height: "15px", width: "15px",color: "#151875" , marginLeft:"5px" ,cursor:"pointer" }} />
              <FormatListBulleted sx={{ height: "15px", width: "15px",color: "#151875" ,marginLeft:"5px" ,cursor:"pointer"}} />
        
          </View>
          <SearchInput />
        </RightSide>
      </NavMenu>
    </Container>
  );
}

export default ShopNavMenu;
