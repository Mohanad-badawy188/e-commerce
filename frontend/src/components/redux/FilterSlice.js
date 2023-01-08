import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  brands :[],
  categories :[],
  discounts :[],
  prices :[],
  ratings :[],
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

  },
})

export const { setBrand,setDiscount,setPrice,setRating,setCat } = filterSlice.actions

export default filterSlice.reducer