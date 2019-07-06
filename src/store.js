import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formRedux } from "redux-form";
import thunk from "redux-thunk";

import products from "./pages/newProduct/productReducer";
import baskets from "./pages/basket/basketReducer";

const reducers = combineReducers({ products, baskets, form: formRedux });

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

export default store;
