"use client";
import { useState } from "react";

function Line() {
  const [activeLine, setActiveLine] = useState(80);

  return (
    <div>
      <div className="rounded-[5px] w-full h-[4px] bg-[var(--is-color-line)] relative">
        <div
          style={{
            width: `${activeLine}%`,
          }}
          className="rounded-[5px] h-[4px] absolute bg-green-500 transition-all duration-300"
        ></div>
        <div
          style={{ left: `${activeLine - 5}%` }}
          className="bottom-[20px] text-[11px] absolute flex items-center justify-center"
        >
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center border-2 border-[var(--is-color-border)]">
            <span>you</span>
          </div>
          <div className="absolute bottom-[-12px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
          <span className="absolute bottom-[-43px] text-[var(--is-color-number)]">
            {activeLine}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Line;
