import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import products from "./pages/newProduct/productReducer";
import baskets from "./pages/basket/basketReducer";

const reducers = combineReducers({ products, baskets });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
