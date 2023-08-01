import { categoryList } from "../../utils/constant";

const initialState = {
  categories: categoryList,
};

const categoriesSlice = (state = initialState) => state;

export default categoriesSlice;
