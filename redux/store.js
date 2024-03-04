import { applyMiddleware, compose, createStore } from "redux";
import persistState from "redux-localstorage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducer";

// Check if localStorage is available
const localStorageAvailable =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

// Middleware setup
let middleware;

if (localStorageAvailable) {
  middleware = compose(applyMiddleware(promise, logger, thunk), persistState());
} else {
  middleware = applyMiddleware(promise, logger, thunk);
}

// Create the store
const store = createStore(reducer, middleware);

export default store;
