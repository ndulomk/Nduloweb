import { configureStore } from "@reduxjs/toolkit";
import  nomeReducer  from "./valuesSlice";
import valueReducer from "./BooleanSlice"
import cartReducer from "./cartSlice"
import numReducer from "./numSlice"

export default configureStore({
  reducer:{
    nome: nomeReducer,
    boolean:valueReducer,
    cart:cartReducer,
    num:numReducer
  }
})