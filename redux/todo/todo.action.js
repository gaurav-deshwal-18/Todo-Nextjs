import todoActionType from "./todo.type.js";

export const addTodo = (data) => {
  return {
    type: todoActionType.ADD_TODO,
    payload: {
      data: data,
      id: new Date().getTime().toString(),
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: todoActionType.REMOVE_TODO,
    id,
  };
};

export const refreshTodos = (data) => ({
  type: todoActionType.REFRESH_TODOS,
  payload: data,
});

export const setLoadingState = (isLoading) => ({
  type: todoActionType.LOADING_STATE,
  payload: {
    isLoading,
  },
});

export const setInitialLoading = () => ({
  type: todoActionType.INITIAL_LOADING,
});
