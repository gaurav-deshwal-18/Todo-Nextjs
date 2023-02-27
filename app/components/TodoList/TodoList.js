import { removeTodo } from "@/redux/todo/todo.action.js";
import { useDispatch } from "react-redux";

const TodoList = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul
        style={{ padding: "0px", listStyleType: "none" }}
        className=" mt-10 capitalize"
      >
        {data.map((item) => {
          return (
            <li
              style={{ padding: "5px 0px" }}
              onClick={() => {
                dispatch(removeTodo(item.id));
              }}
              key={item.id}
              className="bg-teal-200 m-4 rounded-lg p-2 hover:bg-red-100 cursor-pointer	"
            >
              <span className="m-2 text-lg font-bold "> {item.data}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
