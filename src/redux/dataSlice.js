import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  length: 0,
  sort: "",
  keyword:""
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createData: (state, action) => {
      state.data = [...state.data, { ...action.payload }];
      state.length += 1;
    },
    deleteData: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((item) => item.id != id);
    },
    updateData: (state, action) => {
      let newArr = state.data.map((item) =>
        item.id == action.payload.id ? { ...item, ...action.payload } : item
      );
      state.data = [...newArr];
    },
    sortData: (state, action) => {
      state.sort = action.payload;
      state.data =
        state.sort === "asc"
          ? state.data.sort((a, b) =>  a.productPrice - b.productPrice)
          : state.sort === "desc" &&
            state.data.sort((a, b) => b.productPrice - a.productPrice );
    },
    keywordData: (state, action) => {
      state.keyword = action.payload;
    }
  },
});

export default dataSlice.reducer;
export const { createData, updateData, deleteData, sortData,keywordData } = dataSlice.actions;
