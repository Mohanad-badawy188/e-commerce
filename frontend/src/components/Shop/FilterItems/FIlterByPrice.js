import React from 'react'
import { Header, Price } from '../FilterItems'
import Item from './FilterItem'

function FIlterByPrice() {
  return (
    <Price>
    <Header>Price Filter</Header>
    <Item
      name="$0.00 - $150.00"
      value="Price"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item
      name="$150.00 - $350.00"
      value="Price"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item
      name="$150.00 - $504.00"
      value="Price"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item name="$500 +" value="Price" Bgc="#FFDBF1" color="#FF3EB2" />
  </Price>  )
}

export default FIlterByPrice