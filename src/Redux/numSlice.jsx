import { createSlice } from "@reduxjs/toolkit";
export const numSlice = createSlice({
  name:"num",
  initialState:{
    num:0
  },
  reducers:{
    setNum(state, {payload}){
      return{...state, num:payload}
    }
  },
})
export const {setNum} = numSlice.actions
export const selectNum = state=>state.num

export default numSlice.reducer