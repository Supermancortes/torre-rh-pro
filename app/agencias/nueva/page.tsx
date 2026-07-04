"use client";

import { useState, useEffect } from "react";
import { Agencia } from "@/types/Agencia";

export default function NuevaAgencia() {

  const [nombre, setNombre] = useState("");

  const [agencias, setAgencias] = useState<Agencia[]>([]);

const [agenciaEditando, setAgenciaEditando] = useState<number | null>(null);

useEffect(() => {

  const agenciasGuardadas = localStorage.getItem("agencias");

  if (agenciasGuardadas) {

    setAgencias(JSON.parse(agenciasGuardadas));

  }

}, []);

 function guardarAgencia() {

  if (nombre.trim() === "") {
    alert("Escribe el nombre de la agencia");
    return;
  }
const nuevaAgencia: Agencia = {
  id: Date.now(),
  nombre,
};

const nuevasAgencias = [...agencias, nuevaAgencia];

setAgencias(nuevasAgencias);

localStorage.setItem(
  "agencias",
  JSON.stringify(nuevasAgencias)
);

setNombre("");
 }

return (

    <main className="min-h-screen bg-gray-100 flex justify-center py-10">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          🏢 Nueva Agencia
        </h1>

        <label className="block font-semibold mb-2">
          Nombre de la Agencia
        </label>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
          placeholder="Ejemplo: CHEIPY"
        />

        <button
          onClick={guardarAgencia}
          className="w-full bg-blue-700 text-white font-bold rounded-lg p-4"
        >
          💾 Guardar Agencia
        </button>

      </div>

    </main>

  );

}