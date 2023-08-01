import { createReducer } from "@reduxjs/toolkit";
import { categoryList } from "../../utils/constant";

const initialState = {
  categories: categoryList,
};

const categoriesSlice = createReducer(initialState);

export default categoriesSlice;
