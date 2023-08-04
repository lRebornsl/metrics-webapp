import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { URL } from "../../utils/constant";
import axios from "axios";

const GET_GAMES_BY_CATEGORY = "gamesStore/games/GET_GAMES"

export const getGamesByCategory = createAsyncThunk(GET_GAMES_BY_CATEGORY, async (category) => {
  const response = await axios.get(URL, {
    params: {
      category: category
    },
    headers: {
    'X-RapidAPI-Key': '036dcaeac8msh963d8e43a0bf8b0p18b172jsnf6ae43950a75',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  });
  return response.data;
})

const initialState = {
  games: [],
};

const gamesSlice = createReducer(initialState, builder => {
  builder
    .addCase(getGamesByCategory.fulfilled, (state, { payload }) => {
      return{
        ...state,
        games: [...payload],
      }
    })
})

export default gamesSlice;