'use client'

import {useState} from "react";

export default function Home() {
  const [counter, setCounter]   = useState(0)
  return (
    <div className="w-full h-full border-[5px] border-blue-700 flex justify-center items-center flex-col gap-[35px]">
      <h1 className="text-amber-600 font-bold text-[60px]">Hello world</h1>
      <span className="text-[45px] font-bold">{counter}</span>
      <div className="flex gap-[25px]">
        <button className="border-[2px] border-gray-800 w-[75px] h-[45px] text-[25px] font-bold
        rounded-sm flex items-center justify-center bg-blue-400 active:opacity-75" onClick={() => setCounter(counter + 1)}>+1</button>
        <button className="border-[2px] border-gray-800 w-[75px] h-[45px] text-[25px] font-bold
        rounded-sm flex items-center justify-center bg-blue-400 active:opacity-75" onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </div>
  );
}
