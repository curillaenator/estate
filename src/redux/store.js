import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { app } from "./app/app";

const rootReducer = combineReducers({ app });

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;
