import React, { useEffect } from "react";
export default function ImageModal({ open, src, alt = "", onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={stop}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl"
          aria-label="Fechar"
        >
          ❌
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
