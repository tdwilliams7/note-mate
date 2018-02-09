import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/Root/Root";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store/reducers/reducers";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
