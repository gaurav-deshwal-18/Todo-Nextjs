"use client";

import { setInitialLoading } from "@/redux/todo/todo.action.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./components/TodoInput/TodoInput.js";
import TodoList from "./components/TodoList/TodoList.js";

const LoadingTitle = () => {
  return (
    <main className="grid place-items-center	">
      <h1 className="m-5 text-2xl">Loading......</h1>
    </main>
  );
};

export default function Home() {
  const list = useSelector((state) => state.todo.list);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialLoading());
  }, []);

  return (
    <main className="grid place-items-center	">
      <h1 className="m-5 text-4xl">Todo App</h1>
      <div>
        <TodoInput />
        {isLoading ? <LoadingTitle /> : <TodoList data={list} />}
      </div>
    </main>
  );
}
