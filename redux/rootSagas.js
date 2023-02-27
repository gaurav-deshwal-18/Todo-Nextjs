import { all, call } from "redux-saga/effects";
import { todoSagas } from "./todo/todo.saga.js";

export default function* rootSaga() {
  yield all([call(todoSagas)]);
}
