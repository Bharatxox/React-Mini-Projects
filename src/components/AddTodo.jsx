import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlicer";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="w-full p-4 rounded-md shadow-md">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold mb-5">Todo List</h1>
      </div>
      <div className="flex items-center gap-4 rounded-4xl bg-gray-200">
        <input
          type="text"
          className="flex-1 px-8 py-2 rounded-md shadow-sm focus:outline-none"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-orange-500 text-white font-semibold px-10 py-4 rounded-4xl hover:bg-amber-600 transition duration-200 shadow-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
