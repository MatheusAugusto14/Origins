import React, { useState } from "react";
import ImageModal from "./ImageModal";

// Imagem do puzzle das notas (igreja superior)
import lightningPuzzle from "../assets/lightning/lightning_puzzle.png";

// Legenda (setas)
import upImg from "../assets/lightning/switch_up.png";
import downImg from "../assets/lightning/switch_down.png";
import leftImg from "../assets/lightning/switch_left.png";
import rightImg from "../assets/lightning/switch_right.png";

// Imagens dos 7 interruptores (lugares)
import gen5 from "../assets/lightning/gen5.png";
import excavation from "../assets/lightning/excavation.png";
import churchLower from "../assets/lightning/church_lower.png";
import churchUpper from "../assets/lightning/church_upper.png";
import gen4 from "../assets/lightning/gen4.png";
import gen1 from "../assets/lightning/gen1.png";
import gen2 from "../assets/lightning/gen2.png";

/**
 * Mapeamento da legenda de direção -> emoji + imagem
 */
const LEGEND = [
  { id: "up", label: "⬆️", image: upImg },
  { id: "down", label: "⬇️", image: downImg },
  { id: "right", label: "➡️", image: rightImg },
  { id: "left", label: "⬅️", image: leftImg },
];

/**
 * Ordem e posição dos 7 interruptores para o upgrade do cajado de Raio.
 */
const SWITCHES = [
  { id: 1, location: "Gerador 5", dir: "up", image: gen5 },
  { id: 2, location: "Escavação / indo pra igreja", dir: "down", image: excavation },
  { id: 3, location: "Igreja (andar inferior)", dir: "left", image: churchLower },
  { id: 4, location: "Igreja (andar superior)", dir: "down", image: churchUpper },
  { id: 5, location: "Gerador 4", dir: "down", image: gen4 },
  { id: 6, location: "Spawn / Gerador 1", dir: "right", image: gen1 },
  { id: 7, location: "Gerador 2", dir: "up", image: gen2 },
];

export default function LightningStaff() {
  // Estado do modal (qual imagem está aberta)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src, alt) => {
    setModalImg(src);
    setModalAlt(alt || "");
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="space-y-8">
      {/* Título central */}
      <h2 className="text-2xl md:text-3xl font-bold text-center">Puzzle das Notas</h2>

      {/* Puzzle (esquerda) + Sequências (direita) - 60/40 */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Esquerda: puzzle (60%) no mesmo tamanho max que os outros */}
        <div className="w-full md:w-3/5">
          <div className="bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={lightningPuzzle}
              alt="Puzzle das notas do cajado de Raio"
              className="w-full h-full max-h-[600px] object-contain"
            />
          </div>
        </div>

        {/* Direita: texto das sequências (40%) */}
        <div className="w-full md:w-2/5">
          <div className="bg-gray-700 rounded-xl p-4 h-full">
            <h3 className="text-xl font-semibold mb-3">Sequências</h3>
            <p className="mb-2"><strong>Primeira Sequência:</strong> 1, 3, 6</p>
            <p className="mb-2"><strong>Segunda Sequência:</strong> 3, 5, 7</p>
            <p className="mb-2"><strong>Terceira Sequência:</strong> 2, 4, 6</p>
            <p className="text-sm text-gray-300 mt-3">
              Execute as notas no puzzle da igreja superior seguindo a ordem acima.
            </p>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Interruptores — Legenda</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {LEGEND.map((l) => (
            <div key={l.id} className="bg-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
                <img src={l.image} alt={l.id} className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl mt-1">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Interruptores (tamanho natural da imagem) */}
        <h3 className="text-xl font-semibold mb-2">Ajustes dos 7 Interruptores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SWITCHES.map((s) => {
            const legend = LEGEND.find((l) => l.id === s.dir);
            return (
              <div key={s.id} className="bg-gray-700 rounded-2xl p-3">
                {/* Botão com imagem no tamanho natural */}
                <button
                  className="mx-auto block bg-gray-800 rounded-xl overflow-hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => openModal(s.image, s.location)}
                  title="Clique para ampliar"
                >
                  <img src={s.image} alt={s.location} className="max-w-full h-auto" />
                </button>

                {/* Info abaixo */}
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold">{s.location}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center">
                      <img src={legend.image} alt={s.dir} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl">{legend.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal (apenas pros interruptores) */}
      <ImageModal open={modalOpen} src={modalImg} alt={modalAlt} onClose={closeModal} />
    </div>
  );
}
