import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counterSlice';
import { filterSlice } from './slices/filterSlice';

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, filter: filterSlice.reducer },
});
