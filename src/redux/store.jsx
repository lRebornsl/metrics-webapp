import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    categoriesSlice,
  },
});

export default store;