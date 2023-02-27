import todoActionType from "./todo.type.js";

const initialState = {
  list: [],
  isLoading: false,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case todoActionType.ADD_TODO:
    //   const { data, id } = action.payload;
    //   return {
    //     ...state,
    //     list: [...state.list, { data, id }],
    //   };

    // case todoActionType.REMOVE_TODO:
    //   let newList = state.list.filter((newItem) => newItem.id !== action.id);
    //   return {
    //     ...state,
    //     list: newList,
    //   };
    case todoActionType.REFRESH_TODOS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case todoActionType.LOADING_STATE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case todoActionType.INITIAL_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default todoReducer;
