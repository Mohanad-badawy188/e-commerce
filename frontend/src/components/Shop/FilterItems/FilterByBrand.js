import React from 'react'
import { Brand, Header } from '../FilterItems'
import Item from './FilterItem'

function FilterByBrand() {
  return (
    <Brand>
    <Header>Product Brand</Header>

    <Item
      name={"Coaster Furniture"}
      Bgc={"#E5E0FC"}
      color={"#603EFF"}
      value="brand"
    />
    <Item
      name={"Fusion Dot High Fashion"}
      Bgc={"#E5E0FC"}
      color={"#603EFF"}
      value="brand"
    />
    <Item
      name={"Unique Furnitture Restor"}
      Bgc={"#E5E0FC"}
      color={"#603EFF"}
      value="brand"
    />
    <Item
      name={"Dream Furnitture Flipping"}
      Bgc={"#E5E0FC"}
      color={"#603EFF"}
      value="brand"
    />
    <Item
      name={"Young Repurposed"}
      Bgc={"#E5E0FC"}
      color={"#603EFF"}
      value="brand"
    />
    <Item
      name={"Green DIY furniture"}
      Bgc={"#E5E0FC"}
      color={"#603EFF"}
      value="brand"
    />
  </Brand>
  )
}

export default FilterByBrand
