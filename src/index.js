import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers/index";

import "bulma/css/bulma.css";
import "./styles.scss";

const carStore = createStore(carReducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={carStore}>
    <App />
  </Provider>,
  rootElement
);
