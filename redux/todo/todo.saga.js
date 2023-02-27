import { ADD_TODO, GET_TODOS, REMOVE_TODO } from "@/app/graphql/queries.js";
import { all, call, takeLatest, put } from "redux-saga/effects";
import { refreshTodos, setLoadingState } from "./todo.action.js";
import todoActionType from "./todo.type.js";

export function* addTodos({ payload: { data } }) {
  yield put(setLoadingState(true));
  var graphql = JSON.stringify({
    query: ADD_TODO(data),
    variables: {},
  });

  const todoData = yield fetch(
    "https://factual-iguana-40.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "5oHVdF2QM2jBkzC5YJvQ3Rt7OztiV4iksOxBbfKKSLGDWyrWYksUdy3YEr0DXS7N",
      },
      body: graphql,
    }
  );

  const todo = yield todoData.json();
  if (todo?.data) {
    yield refreshTodo();
  } else {
    yield put(setLoadingState(false));
  }
}

export function* removeTodo({ id }) {
  yield put(setLoadingState(true));

  var graphql = JSON.stringify({
    query: REMOVE_TODO(id),
    variables: {},
  });

  const todoData = yield fetch(
    "https://factual-iguana-40.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "5oHVdF2QM2jBkzC5YJvQ3Rt7OztiV4iksOxBbfKKSLGDWyrWYksUdy3YEr0DXS7N",
      },
      body: graphql,
    }
  );

  const todo = yield todoData.json();
  if (todo?.data) {
    yield refreshTodo();
  } else {
    yield put(setLoadingState(false));
  }
}

export function* refreshTodo() {
  var graphql = JSON.stringify({
    query: GET_TODOS,
    variables: {},
  });

  const todoData = yield fetch(
    "https://factual-iguana-40.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "5oHVdF2QM2jBkzC5YJvQ3Rt7OztiV4iksOxBbfKKSLGDWyrWYksUdy3YEr0DXS7N",
      },
      body: graphql,
    }
  );

  const todo = yield todoData.json();
  if (todo?.data) {
    yield put(refreshTodos(todo.data.todo));
  }
}

export function* onAddTodos() {
  yield takeLatest(todoActionType.ADD_TODO, addTodos);
}

export function* onRemoveTodos() {
  yield takeLatest(todoActionType.REMOVE_TODO, removeTodo);
}

export function* onRefresh() {
  yield takeLatest(todoActionType.INITIAL_LOADING, refreshTodo);
}

export function* todoSagas() {
  yield all([call(onAddTodos), call(onRemoveTodos), call(onRefresh)]);
}
