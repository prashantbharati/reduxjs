import counter from "./Counter";
import isLogged from "./IsLogin";

import { combineReducers } from "redux";

const reducer = () => {
  combineReducers({ counter: counter, isLogged: isLogged });
};

export default reducer;
