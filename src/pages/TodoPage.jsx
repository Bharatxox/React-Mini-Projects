import React from "react";
import AddTodo from "../components/addTodo";
import Todos from "../components/Todos";

const TodoPage = () => {
  return (
    <div className="font-poppins h-screen w-screen bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] flex justify-center items-center p-3">
      <div className="h-3/4 max-w-2xl  bg-white rounded-2xl p-4">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default TodoPage;
