import { combineReducers } from "@reduxjs/toolkit";

import todoReducer from "./todo/todo.reducer.js";

export const rootReducer = combineReducers({ todo: todoReducer });
