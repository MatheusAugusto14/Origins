/**
 * FireStaff.jsx (FIXED-PIXELS)
 * - Usa o mapa fixo em 669x624 px (vistadecima.png).
 * - Posiciona tochas por coordenadas em pixels (left/top em px).
 * - Tocha 4 é fixa (sempre acesa). Seleção limitada a 3 símbolos.
 * - Bolinhas têm tamanho fixo 22px.
 */

import React, { useState } from "react";
import s11 from "../assets/fire/11.png";
import s5 from "../assets/fire/5.png";
import s9 from "../assets/fire/9.png";
import s7 from "../assets/fire/7.png";
import s6 from "../assets/fire/6.png";
import s3 from "../assets/fire/3.png";
import s4 from "../assets/fire/4.png"; // fixo
import mapImg from "../assets/fire/vistadecima.png";

// Coordenadas em pixels (x, y) na imagem 669 x 624
const TOCHAS = {
  6: [562, 432],
  3: [557, 226],
  5: [477, 72],
  7: [98, 93],
  4: [98, 248],
  9: [98, 396],
  11: [260, 549]
};

const SYMBOLS = [
  { num: 11, img: s11 },
  { num: 5,  img: s5  },
  { num: 9,  img: s9  },
  { num: 7,  img: s7  },
  { num: 6,  img: s6  },
  { num: 3,  img: s3  },
];

export default function FireStaff() {
  const [selected, setSelected] = useState([]);

  const toggle = (num) => {
    setSelected(prev => {
      if (prev.includes(num)) return prev.filter(n => n !== num);
      if (prev.length >= 3) return prev;
      return [...prev, num];
    });
  };

  const CIRCLE_SIZE = 22; // px

  // renderiza uma tocha em px
  const renderTocha = (num, pos) => {
    const isActive = selected.includes(num) || num === 4; // 4 é fixo
    const leftPx = pos[0] + "px";
    const topPx = pos[1] + "px";
    const style = {
      position: "absolute",
      left: leftPx,
      top: topPx,
      width: CIRCLE_SIZE + "px",
      height: CIRCLE_SIZE + "px",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      backgroundColor: isActive ? "#FFA500" : "#7a7a7a",
      border: "2px solid rgba(0,0,0,0.28)",
      boxSizing: "border-box",
      transition: "all 140ms ease",
      zIndex: 30,
      pointerEvents: "none",
    };
    return <div key={num} style={{...style}} title={`Tocha ${num}`} />;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-3 text-center">Selecione os símbolos</h2>

      {/* Grade 3x2 */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {SYMBOLS.map(s => {
            const active = selected.includes(s.num);
            return (
              <button
                key={s.num}
                onClick={() => toggle(s.num)}
                className={"rounded-lg bg-gray-800 p-2 flex flex-col items-center justify-center transition " + (active ? "ring-4 ring-blue-500" : "hover:bg-gray-700")}
                title={`Símbolo ${s.num}`}
                aria-pressed={active}
              >
                <div className="w-[200px] h-[200px] rounded-md overflow-hidden bg-black flex items-center justify-center">
                  <img src={s.img} alt={`Símbolo ${s.num}`} className="max-w-full max-h-full object-contain" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mapa fixo em pixels */}
      <div className="mx-auto" style={{ width: 669, height: 624 }}>
        <div style={{ position: "relative", width: 669, height: 624 }}>
          <img src={mapImg} alt="Mapa (669x624)" width={669} height={624} style={{ display: "block", userSelect: "none" }} />
          <div style={{ position: "absolute", left: 0, top: 0, width: 669, height: 624, pointerEvents: "none" }}>
            {Object.entries(TOCHAS).map(([k, v]) => renderTocha(parseInt(k, 10), v))}
          </div>
        </div>
      </div>

      {/* Lista de selecionados */}
      <div className="text-center mt-4">
        <div className="text-sm text-gray-300 mb-1">Selecionados:</div>
        <div className="text-lg font-medium">{selected.length ? selected.join(", ") + ", " : ""}4 (fixo)</div>
      </div>

      <div className="text-xs text-gray-400 mt-2 text-center">Dica: selecione até 3 símbolos; o número 4 sempre fica fixo.</div>
    </div>
  );
}
