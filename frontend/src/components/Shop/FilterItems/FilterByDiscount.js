import React from 'react'
import { Header,Discount } from '../FilterItems'
import Item from './FilterItem'

function FilterByDiscount() {
  return (
    <Discount>
    <Header>Discount Offer</Header>
    <Item
      name={"10% Discount Offer"}
      Bgc="#FFDBF1"
      color="#FF3EB2"
      value="Discount"
    />
    <Item
      name={"20% Discount Offer"}
      Bgc="#FFDBF1"
      color="#FF3EB2"
      value="Discount"
    />

    <Item
      name={"30% Discount Offer"}
      Bgc="#FFDBF1"
      color="#FF3EB2"
      value="Discount"
    />
  </Discount>
  )
}

export default FilterByDiscount
