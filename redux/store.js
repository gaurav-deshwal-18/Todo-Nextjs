import createSagaMiddleware from "redux-saga";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer.js";
import rootSaga from "./rootSagas.js";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
sagaMiddleware.run(rootSaga);
