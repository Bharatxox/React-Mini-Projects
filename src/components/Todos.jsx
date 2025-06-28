import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlicer";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
      {" "}
      {/* ✅ scroll container */}
      {todos.length === 0 ? (
        <p className="mt-6 text-gray-500 text-center">No tasks added yet ✨</p>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded-md px-4 py-2"
          >
            <div className="flex items-center gap-3 w-full">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="sr-only peer"
                />
                <div
                  className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white 
              peer-checked:bg-orange-500 peer-checked:border-orange-500 
              flex items-center justify-center transition duration-200"
                >
                  <img
                    src="/tick.svg" // ✅ corrected path
                    alt="tick"
                    className="w-6 h-6 opacity-100 peer-checked:opacity-0 transition-opacity duration-200 z-10"
                  />
                </div>
              </label>

              {/* ✅ wrap long todo text */}
              <p
                className={`text-lg pl-2 break-words max-w-[400px] ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </p>
            </div>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium transition"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </li>
        ))
      )}
    </div>
  );
};

export default Todos;
