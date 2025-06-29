import React, { useState } from "react";
import {
  BsDice1Fill,
  BsDice2Fill,
  BsDice3Fill,
  BsDice4Fill,
  BsDice5Fill,
  BsDice6Fill,
} from "react-icons/bs";

const diceIcons = [
  <BsDice1Fill color="#ef4444" />,
  <BsDice2Fill color="#ef4444" />,
  <BsDice3Fill color="#ef4444" />,
  <BsDice4Fill color="#ef4444" />,
  <BsDice5Fill color="#ef4444" />,
  <BsDice6Fill color="#ef4444" />,
];

const DiceRoller = () => {
  const [diceIndex, setDiceIndex] = useState(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setDiceIndex(randomIndex);
      setRolling(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] font-poppins">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg text-center space-y-6">
        <h1 className="text-2xl font-bold text-purple-700">Dice Roller</h1>

        <div
          className={`text-[100px] text-gray-800 transition-transform duration-500 ease-in-out mx-auto flex justify-center ${
            rolling ? "animate-roll" : ""
          }`}
        >
          {diceIndex !== null ? diceIcons[diceIndex] : "🎲"}
        </div>

        <button
          onClick={rollDice}
          disabled={rolling}
          className="bg-orange-500 text-white hover:bg-orange-600 font-semibold py-2 mt-4 px-4 rounded-full disabled:opacity-50"
        >
          {rolling ? "Rolling..." : "Roll the Dice"}
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
