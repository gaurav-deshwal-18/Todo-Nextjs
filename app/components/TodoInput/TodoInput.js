import { addTodo } from "@/redux/todo/todo.action.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="search"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        className="shadow appearance-none border rounded mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={() => {
          dispatch(addTodo(todo));
          setTodo("");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};
export default TodoInput;
