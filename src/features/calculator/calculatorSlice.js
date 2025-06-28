import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  result: "",
};

const operators = ["+", "-", "*", "/", "%"];

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addInput: (state, action) => {
      const val = action.payload;
      const lastChar = state.input.slice(-1);

      if (val === ".") {
        const lastChar = state.input.slice(-1);
        const isLastOperator = operators.includes(lastChar);

        // ❌ Block dot directly after an operator like 2+
        if (isLastOperator || state.input === "") {
          return; // or: state.input += "0."; if you want to auto-fix
        }

        // Get current number segment (after last operator)
        const parts = state.input.split(/[\+\-\*\/%]/);
        const currentNumber = parts[parts.length - 1];

        // ❌ Already has a dot
        if (currentNumber.includes(".")) {
          return;
        }

        // ✅ Allow
        state.input += ".";
        return;
      }

      if (val === "0" || val === "00") {
        const isEmpty = state.input === "";
        const isOnlyZero = state.input === "0";
        const isLastOperator = operators.includes(lastChar);

        // Case 1: empty input → just one zero
        if (isEmpty || isOnlyZero) {
          state.input = "0";
          return;
        }

        // Case 2: last char is operator → ensure only 1 zero after it
        const match = state.input.match(/[\+\-\*\/%]0$/); // ends with operator+0
        if (isLastOperator || match) {
          // Do not allow multiple zeros after an operator
          const endsWithOpAndZero = /[\+\-\*\/%]0$/.test(state.input);
          if (endsWithOpAndZero) return;

          // If just operator (e.g., `6+`) → add one zero
          state.input += "0";
          return;
        }

        // Case 3: digit before → allow normal appending
        state.input += val;
        return;
      }

      if (operators.includes(val)) {
        // If input is empty, only allow minus (e.g., -7)
        if (state.input === "") {
          if (val === "-") {
            state.input += val;
          }
          return;
        }

        // If last char is also an operator
        if (operators.includes(lastChar)) {
          // Allow only one special case: a negative number like 8 + -7
          const secondLastChar = state.input.slice(-2, -1);
          if (
            val === "-" &&
            operators.includes(secondLastChar) === false &&
            lastChar !== "-"
          ) {
            state.input += val; // allow 8 + -7
          }
          return; // don't allow other double operators
        }
      }

      state.input += val;
    },
    clearInput: (state) => {
      state.input = "";
      state.result = "";
    },
    evaluateResult: (state) => {
      try {
        // Handle empty or invalid input
        if (state.input === "0" || state.input === "00" || state.input === "") {
          state.result = "0";
          return;
        }

        // Remove trailing operator if it exists
        let expression = state.input;

        // Remove ALL invalid trailing operators (e.g., "*-", "--", etc.)
        // Keep one "-" if it's valid negative like "*-7"
        const lastChar = expression.slice(-1);
        if (operators.includes(lastChar)) {
          // 👇 Optional: you can show a warning or just return silently
          return;
        }

        while (
          operators.includes(expression.slice(-1)) &&
          !(
            expression.length > 1 &&
            expression.slice(-2, -1).match(/\d/) && // digit before -
            expression.slice(-1) === "-"
          )
        ) {
          expression = expression.slice(0, -1);
        }

        // Clean invalid numbers like 05, 007 → 5, 7
        const cleanedInput = expression.replace(/\b0+(\d+)/g, "$1");

        // Evaluate
        state.result = eval(cleanedInput).toString();
      } catch {
        state.result = "Error";
      }
    },
    removeLast: (state) => {
      state.input = state.input.slice(0, -1);
    },
    showInput: (state) => {
      state.input = state.result;
    },
  },
});

export const { addInput, clearInput, evaluateResult, removeLast, showInput } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
