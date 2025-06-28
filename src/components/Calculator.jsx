import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaPlus,
  FaMinus,
  FaDivide,
  FaEquals,
  FaPercent,
} from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import { IoBackspaceOutline } from "react-icons/io5";

import {
  addInput,
  clearInput,
  evaluateResult,
  removeLast,
  showInput,
} from "../features/calculator/calculatorSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  const { input, result } = useSelector((state) => state.calculator);

  const handleClick = (val) => {
    if (val === "C") dispatch(clearInput());
    else if (val === "=" || val === "Enter") dispatch(showInput());
    else if (val === "⌫" || val === "Backspace") dispatch(removeLast());
    else if ("0123456789.+-*/%00".includes(val)) dispatch(addInput(val));
    dispatch(evaluateResult());
  };

  const buttons = [
    "C",
    "%",
    "⌫",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, [input]); // runs whenever input updates

  useEffect(() => {
    const handleKeyDown = (e) => handleClick(e.key);
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] font-poppins">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>

        <div
          ref={inputRef}
          className="text-right text-2xl mb-1 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200  py-2"
        >
          {input || "0"}
        </div>
        <div className="text-right text-gray-500 mb-4">{result}</div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className={`w-15 h-15 py-2 flex justify-center items-center rounded-full text-lg font-semibold ${
                btn === "="
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : btn === "C"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {
                btn === "+" ? (
                  <FaPlus />
                ) : btn === "-" ? (
                  <FaMinus />
                ) : btn === "*" ? (
                  <FaPlus className="rotate-45" />
                ) : btn === "/" ? (
                  <FaDivide />
                ) : btn === "%" ? (
                  <FaPercent />
                ) : btn === "=" ? (
                  <FaEquals />
                ) : btn === "⌫" ? (
                  <IoBackspaceOutline size={28} />
                ) : (
                  btn
                ) // Default fallback (numbers, dot, etc.)
              }
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
