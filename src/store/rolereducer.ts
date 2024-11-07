import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import optionalroles from "../data/roles.json";



export const roleSlice =  createSlice({
    name:'role',
    initialState:optionalroles[0],
    reducers:{
        setRole:(state:string, action:PayloadAction<number>)=>{
            state = optionalroles[action.payload]
            return state
        }
    }
})

export const {
    setRole
} = {
  ...roleSlice.actions
};