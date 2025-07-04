"use client";
import React from "react";

const ComplaintBookButton = () => {
  return (
    <a
      href="https://www.consumidor.gob.pe/libro-de-reclamaciones"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-105"
      title="Libro de Reclamaciones"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
      </svg>
      <span className="text-sm font-semibold">
        Libro de Reclamaciones
      </span>
    </a>
  );
};

export default ComplaintBookButton; 
