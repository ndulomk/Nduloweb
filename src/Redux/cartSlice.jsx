import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name:"cart",
  initialState:{
    cart:[],
    cartTotal: 0,
    Total:0

  },
  reducers:{
    addTocart(state, {payload}){
      const itemIndex = state.cart.findIndex((item)=>item.id === payload.id)
      if(itemIndex < 0){
        const newcart = {...payload, quantity: 1}
        state.cart.push(newcart)
        state.cart.push(itemIndex)
      }
      else{
        state.cart[0].quantity += 1
      }

    },
    removeTocart(state,action){
      const itemIndex = state.cart.findIndex((item)=>item.id === action.payload.id)
      if(state.cart[itemIndex].quantity > 1){
        state.cart[itemIndex].quantity -= 1
      }
      else{
        if(state.cart[itemIndex].quantity === 1){
          state.cart.splice(itemIndex, 1)
        }
      }
    },
    getTotal(state, action){
      const index = state.cart.findIndex((item)=>item.id === action.payload.id)
      // state.Total = state.Total += state.cart[index].price * state.cart[index].quantity


    }
  }
})

export const {addTocart, removeTocart, getTotal} = cartSlice.actions
export const selectcart = state => state.cart
export const selectTotal = state=> state.Total


export default cartSlice.reducer