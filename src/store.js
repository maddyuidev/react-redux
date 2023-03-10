import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { ProductsReducer, ProductReducer } from "./reducers/productReducer";

const reducers = combineReducers({
  products: ProductsReducer,
  product: ProductReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
