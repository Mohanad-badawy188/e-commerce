import React from 'react'
import Header from './Header'
import ShopNavMenu from './Shop/ ShopNavMenu'
import ShopPage from './Shop/ ShopNavMenu'
import FilterItems from './Shop/FilterItems'
import GridDefault from './Shop/GridDefault'
function Shop() {
  return (
    <div>
      <Header />
      <ShopNavMenu />
      <GridDefault  />
    </div>
  )
}

export default Shop
