import React from 'react'
import { Categories, Header } from '../FilterItems'
import Item from './FilterItem'

function FilterByCategories() {
  return (
    <Categories>
    <Header>Categories</Header>
    <Item
      name="Prestashop"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item name="Magento" value="categories" Bgc="#FFDBF1" color="#FF3EB2" />
    <Item
      name="Accessories"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item name="Bags" value="categories" Bgc="#FFDBF1" color="#FF3EB2" />
    <Item
      name="osCommerce"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item
      name="Bigcommerce"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item
      name="New Arrival"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item
      name="Best Seller"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
    <Item
      name="Featured Products"
      value="categories"
      Bgc="#FFDBF1"
      color="#FF3EB2"
    />
  </Categories>
  )
}

export default FilterByCategories