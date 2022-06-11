// import { createStore } from "redux";
// const loginStateReducer = (state = { login: false }, action) => {
//   if (action.type === "login") {
//     window.localStorage.setItem("userLoginState", true);
//     return { login: true };
//   } else {
//     return state;
//   }
// };
// const store = createStore(loginStateReducer);
// export default store;

import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from './counter';
import authReducer from "./auth";
import coordinatesReducer from "./coordinates";

const store = configureStore({
  // reducer: { counter: counterReducer, auth: authReducer },
  reducer: { auth: authReducer, coordinates: coordinatesReducer },
});

export default store;
