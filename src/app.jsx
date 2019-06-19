import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppLayout from "./components/AppLayout";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppLayout />
  </Provider>,
  document.getElementById("container")
);
