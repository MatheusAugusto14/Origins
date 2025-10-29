import React from "react";
import ice from "../assets/ice_staff_puzzle.png";
export default function IceStaff() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Cajado de Gelo — Puzzle</h2>
      <div className="flex justify-center">
        <img src={ice} alt="Ice Staff Puzzle" className="rounded-xl max-h-[600px] w-full md:w-auto object-contain" />
      </div>
    </div>
  );
}
