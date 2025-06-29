import React, { useState } from "react";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");

  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const allValid = Object.values(validations).every(Boolean);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] font-poppins">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg text-center space-y-4">
        <h1 className="text-2xl font-bold text-purple-700">
          Password Validator
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <ul className="text-left space-y-1 text-sm">
          <li
            className={validations.length ? "text-green-600" : "text-red-500"}
          >
            • Minimum 8 characters
          </li>
          <li
            className={
              validations.uppercase ? "text-green-600" : "text-red-500"
            }
          >
            • At least one uppercase letter
          </li>
          <li
            className={
              validations.lowercase ? "text-green-600" : "text-red-500"
            }
          >
            • At least one lowercase letter
          </li>
          <li
            className={validations.number ? "text-green-600" : "text-red-500"}
          >
            • At least one number
          </li>
          <li
            className={validations.special ? "text-green-600" : "text-red-500"}
          >
            • At least one special character
          </li>
        </ul>

        <div
          className={`font-semibold ${
            allValid ? "text-green-600" : "text-red-500"
          }`}
        >
          {password.length > 0
            ? allValid
              ? "Strong password 💪"
              : "Weak password ❌"
            : "Start typing..."}
        </div>
      </div>
    </div>
  );
};

export default PasswordValidator;
