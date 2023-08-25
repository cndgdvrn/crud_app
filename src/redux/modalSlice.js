import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statue:false,
    type:"",
}

export const modalSlice =  createSlice({
    name: "modal",
    initialState,
    reducers:{
        OCModal : (state) => {
            state.statue = !state.statue
        },
        changeType : (state,action) => {
            state.type = action.payload
        }
    }
})


export default modalSlice.reducer;
export const {OCModal,changeType} = modalSlice.actions;