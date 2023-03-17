import { combineReducers } from "redux";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
