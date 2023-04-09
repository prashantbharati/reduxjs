import React from "react";
import ReactDOM from "react-dom/client";
// import createstore and provider
// import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./Reducers";
// Build our store using rootreducers
// const store = createStore(reducer);
import store from "./store";
// Passed the storeto our application through the help of Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
