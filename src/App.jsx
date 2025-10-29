import React, { useState } from "react";
import IceStaff from "./components/IceStaff";
import FireStaff from "./components/FireStaff";
import WindStaff from "./components/WindStaff";
import LightningStaff from "./components/LightningStaff";

const TABS = [
  { id: "ice", label: "Gelo" },
  { id: "fire", label: "Fogo" },
  { id: "wind", label: "Vento" },
  { id: "lightning", label: "Raio" },
];

export default function App() {
  const [tab, setTab] = useState("fire"); // abrir direto no fogo pra testar
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Origins — Upgrades dos Cajados</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={"px-4 py-2 rounded-xl transition " + (tab===t.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 rounded-2xl p-5 shadow-xl">
        {tab === "ice" && <IceStaff />}
        {tab === "fire" && <FireStaff />}
        {tab === "wind" && <WindStaff />}
        {tab === "lightning" && <LightningStaff />}
      </div>
    </div>
  );
}
