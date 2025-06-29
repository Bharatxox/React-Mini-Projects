import React from "react";
import useFetch from "../hooks/useFetch";

const DadJokes = () => {
  const [data, refetch] = useFetch(
    "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] font-poppins">
      <div className="bg-white p-10 rounded-lg w-120 shadow-lg text-center flex flex-col justify-between gap-4">
        <h1 className="text-2xl font-bold text-orange-500">Programming Joke</h1>

        <p className="text-lg text-gray-700 min-h-[60px]">
          {data ? data.joke : "Loading..."}
        </p>

        <button
          onClick={refetch}
          className="bg-orange-500 text-white hover:bg-orange-600 font-semibold py-2 px-4 rounded-full"
        >
          Click to Generate Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
