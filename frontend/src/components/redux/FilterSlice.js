import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  brands :[],
  categories :[],
  discounts :[],
  prices :[],
  ratings :[],
  sort : "",
  pages : 9,
  search :"",
  view :"grid"
}




export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand: (state,action) => {
      state.brands = action.payload;

    },
    setCat: (state,action) => {
      state.categories = action.payload;

    },
    setRating: (state,action) => {
      state.ratings = action.payload;

    },
    setPrice: (state,action) => {
      state.prices = action.payload;

    },
    setDiscount: (state,action) => {
      state.discounts = action.payload;

    },
    
    setSort: (state,action) => {
      state.sort = action.payload;

    },
    setPages: (state,action) => {
      state.pages = action.payload;

    },
    setSearch: (state,action) => {
      state.search = action.payload;
  
    },
    setView: (state,action) => {
      state.view = action.payload;
  
    },
  },
})

export const { setBrand,setDiscount,setPrice,setRating,setCat ,setSort,setPages ,setSearch,setView} = filterSlice.actions

export default filterSlice.reducer