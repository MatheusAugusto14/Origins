import React from "react";
import wind from "../assets/wind_staff_puzzle.png";
export default function WindStaff() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Cajado de Vento — Puzzle</h2>
      <div className="flex justify-center">
        <img src={wind} alt="Wind Staff Puzzle" className="rounded-xl max-h-[600px] w-full md:w-auto object-contain" />
      </div>
    </div>
  );
}
