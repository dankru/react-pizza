import { createSlice } from '@reduxjs/toolkit';
//get rid of filterIndex
const initialState = {
  currentPage: 1,
  categoryIndex: 0,
  filterIndex: 0,
  filterName: 'rating',
  filter: [
    {
      name: 'популярности',
      sortProperty: 'rating',
    },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
  ],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setFilterIndex(state, action) {
      state.filterIndex = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
   
  },
});

export const { setCategoryIndex, setFilterIndex, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
