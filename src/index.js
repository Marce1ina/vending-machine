import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const wrapper = document.getElementById("app");
ReactDOM.render(
    <Provider {...{ store }}>
        <App />
    </Provider>,
    wrapper
);
