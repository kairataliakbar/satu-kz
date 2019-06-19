import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import products from "./pages/newProduct/productReducer";

const reducers = combineReducers({ products });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
