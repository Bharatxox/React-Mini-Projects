import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "../features/todo/todoSlicer";
import calculatorReducer from "../features/calculator/calculatorSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlicer,
    calculator: calculatorReducer,
  },
});
