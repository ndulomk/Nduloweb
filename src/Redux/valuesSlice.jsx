import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name:"nome",
  initialState:{
    nome:"",
    boolean: false
  },

    reducers:{
      setnome(state, {payload}){
        return{...state, boolean: true, nome: payload}
      },
    },

})
export const {setnome} = slice.actions
export const selectnome = state => state.nome

export default slice.reducer