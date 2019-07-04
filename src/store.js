import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import products from "./pages/newProduct/productReducer";
import basket from "./pages/basket/basketReducer";

const reducers = combineReducers({ products, basket });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
