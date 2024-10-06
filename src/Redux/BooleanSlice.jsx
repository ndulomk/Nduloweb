import { createSlice } from "@reduxjs/toolkit";

export const myslice = createSlice({
  name:"boolean",
  initialState:{
    nome:"",
    boolean: false
  },

    reducers:{
      setboolean(state, {payload}){
        return{...state, boolean: true, nome: payload}
      },
      changeboolean(state, {payload}){
        return{...state, boolean:false, nome:""}
      }
    },

})
export const {setboolean, changeboolean} = myslice.actions
export const selectboolean = state => state.boolean

export default myslice.reducer