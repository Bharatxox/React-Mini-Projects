import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimeRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - time; // resume from last
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10); // every 10ms for hundredths
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const formatTimeParts = (ms) => {
    const hrs = String(Math.floor(ms / 3600000)).padStart(2, "0");
    const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
    const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const hund = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return { hrs, mins, secs, hund };
  };

  const { hrs, mins, secs, hund } = formatTimeParts(time);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] font-poppins">
      <div className="bg-white p-8 rounded-lg h-60 w-100 shadow-lg flex flex-col justify-between gap-2">
        <h1 className="text-2xl font-bold text-center mb-4">Stopwatch</h1>

        <div className="text-center text-3xl font-mono text-gray-800 mb-6">
          {hrs} : {mins} : {secs} :{" "}
          <span className="text-orange-500">{hund}</span>
        </div>

        <div className="flex justify-around w-full">
          <button
            onClick={start}
            disabled={isRunning}
            className="bg-green-500  hover:bg-green-600 text-white font-semibold rounded-full disabled:opacity-50 w-12 h-12 flex justify-center items-center"
          >
            <FaPlay />
          </button>
          <button
            onClick={stop}
            disabled={!isRunning}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full disabled:opacity-50 w-12 h-12 flex justify-center items-center"
          >
            <FaPause />
          </button>
          <buttons
            onClick={reset}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold w-12 h-12 flex justify-center items-center rounded-full"
          >
            <VscDebugRestart />
          </buttons>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
