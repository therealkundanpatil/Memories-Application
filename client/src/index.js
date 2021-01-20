import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";


const store = createStore(reducers,compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <App/>  
    </Provider>, document.getElementById("root"));