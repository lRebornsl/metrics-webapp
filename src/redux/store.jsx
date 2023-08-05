import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './Categories/categoriesSlice';
import gamesSlice from './Games/gamesSlice';

const store = configureStore({
  reducer: {
    categoriesSlice,
    gamesSlice,
  },
});

export default store;