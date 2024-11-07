import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export const floorSlice =  createSlice({
    name:'floor',
    initialState:{
          floorAccess: [false, false, false, false, false]
      },
    reducers:{
        changeAccess:(state:any, action:PayloadAction<number>)=>{
            state.floorAccess[action.payload] = 
            !state.floorAccess[action.payload]
        }
    }
})

export const {
    changeAccess
} = {
  ...floorSlice.actions,
};